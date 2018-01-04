import React, { Component } from 'react';

import './NavMenu.css';
import DropDown from './DropDown';

export default class NavMenu extends Component {

  render() {
    const { children, menuTitle } = this.props;

    return (
      <nav className="NavMenu">
        <DropDown title={menuTitle}>
          {children}
        </DropDown>
      </nav>
    );
  }

}
