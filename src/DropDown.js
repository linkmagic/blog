import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DropDown.css';

export default class DropDown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
      // wndWidth: window.innerWidth,
      // wndHeight: window.innerHeight,
      // stylePos: {
      //   position: 'absolute',
      //   left: 0,
      //   top: 0
      // }
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

  /*componentDidMount() {
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    let x, y;

    if ((rect.x + rect.width) > this.state.wndWidth) {
      x = rect.x - rect.width;
    } else {
      x = rect.x;
    }

    if ((rect.y + rect.height) > this.state.wndHeight) {
      y = rect.y - rect.height;
    } else {
      y = rect.y;
    }

    this.setState({
      stylePos: {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px'
      }
    });
  }*/

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.addEventListener('click', this.close);
      // let ddMenu = document.getElementById('idDropDownMenu');
      // ddMenu.setAttribute('style', 'left:100px');
      // console.log(ddMenu);
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
        <button className="DropDown__Title">{ title }</button>

        <div onClick={ this.open } className="DropDown__ArrowBtn">
          <img className="DropDown__ArrowBtnImg" src="img/nav-arrow-down.png" alt="nav-arrow-dowm"/>
          <div id="navPanelPublicBtnExtMenuContent" className={ `DropDown__Menu ${isOpen ? 'Component-show' : ''}` }>
            { children }
          </div>
        </div>

      </div>
    );
  }

}
