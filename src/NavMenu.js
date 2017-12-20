import React, { Component } from 'react';
import './NavMenu.css';

import DropDown from './DropDown';

export default class NavMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <nav className="NavMenu">
        <DropDown title="Все публикации">
          {children}
        </DropDown>
      </nav>
    );
  }

}
