import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';

import DropDown from './DropDown';
import './DropDown.css';

class Login extends Component {

  loginOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'USER_PROFILE',
      value: this.props.userData.userid
    });
  };

  render() {
    const { userData } = this.props;
    const userName = userData.name;

    return (
      <div className="Login">
        <p onClick={this.loginOnClick} className="Login__Title">{userName}</p>
        <img onClick={this.loginOnClick} className="Login__Avatar" src={userData.avatar} alt="user"/>
        <DropDown>
          <p><button className="DropDown__MenuItem">Выход</button></p>
          <p><button className="DropDown__MenuItem">Настройки</button></p>
        </DropDown>
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

)(Login);