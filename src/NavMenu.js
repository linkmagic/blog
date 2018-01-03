import React from 'react';
import { connect } from 'react-redux';

import './NavMenu.css';

import DropDown from './DropDown';

class NavMenu extends React.Component {

  menuOnClick = () => {
    this.props.onDisplayContentChange('PUBLICATIONS');
  }

  render() {
    const { children, menuTitle } = this.props;

    return (
      <nav onClick={this.menuOnClick} className="NavMenu">
        <DropDown title={menuTitle}>
          {children}
        </DropDown>
      </nav>
    );
  }

}

export default connect(
  
  state => ({
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (name) => {
      dispatch({ type: 'DISPLAY_CONTENT', name});
    }
  })

)(NavMenu);