import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class NavItem extends Component {

  navItemOnClick = () => {
    this.props.onDisplayContentChange({ name: this.props.displayContentName });
  };

  render() {
    return (
      <button onClick={this.navItemOnClick} className="NavItem">{this.props.title}</button>
    );
  }

}

export default connect(

  state => ({
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action })
    }
  })

)(NavItem);