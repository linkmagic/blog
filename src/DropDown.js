import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {isOpen: false};
  }

  open = () => {
    this.setState({isOpen: true});
  };

  close = () => {
    if (this.state.isOpen) {
      this.setState({isOpen: false});
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
      <div className="nav-panel-public-btn">
        <button className="dropdown-title-btn-style">{title}</button>

        <div onClick={this.open} className="nav-panel-public-btn-ext-menu">
          <img src="img/nav-arrow-down.png" alt="nav-arrow-dowm"/>
          <div id="navPanelPublicBtnExtMenuContent" className={`nav-panel-public-btn-ext-menu-content ${isOpen ? 'show-component' : ''}`}>
            {children}
          </div>
        </div>

      </div>
    );
  }

}
