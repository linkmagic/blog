import React from 'react';
import { connect } from 'react-redux';

import './NavItem.css';

class NavItem extends React.Component {

  navItemOnClick = () => {
    this.props.onDisplayContentChange(this.props.displayContentName);
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
    onDisplayContentChange: (name) => {
      dispatch({ type: 'DISPLAY_CONTENT', name })
    }
  })

)(NavItem);