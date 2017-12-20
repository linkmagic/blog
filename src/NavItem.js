import React, { Component } from 'react';
import './NavItem.css';

export default class NavItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="NavItem">{this.props.title}</button>
    );
  }

}
