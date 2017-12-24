import React from 'react';
import './DropDown.css';

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

  }

  open = () => {
    this.setState({ isOpen: true });
    console.log(this.state);
  };

  close = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.addEventListener('click', this.close);
    } else {
      document.removeEventListener('click', this.close);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  render() {
    const { children, title } = this.props;
    const { isOpen } = this.state;

    return (
      <div id="idDropDownMenu">
        <button className="DropDown__Title">{title}</button>

        <div onClick={this.open} className="DropDown__ArrowBtn">
          <img className="DropDown__ArrowBtnImg" src="img/nav-arrow-down.png" alt="nav-arrow-dowm"/>
          <div id="navPanelPublicBtnExtMenuContent" className={`DropDown__Menu ${isOpen ? 'Component-show' : ''}`}>
            {children}
          </div>
        </div>

      </div>
    );
  }

}
