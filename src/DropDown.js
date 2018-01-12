import React from 'react';
import { connect } from 'react-redux';

import './DropDown.css';

class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

  }

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  titleOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'PUBLICATIONS',
      value: 0
    });
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
        <button onClick={this.titleOnClick} className="DropDown__Title">{title}</button>
        <div onClick={this.open} className="DropDown__ArrowBtn">
          <img className="DropDown__ArrowBtnImg" src="img/nav-arrow-down.png" alt="nav-arrow-dowm"/>
          <div className={`DropDown__Menu ${isOpen ? 'Component-show' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    );
  }

}

export default connect(

  state => ({
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action});
    }
  })

)(DropDown);