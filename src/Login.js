import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';

import DropDown from './DropDown';
import './DropDown.css';

class Login extends Component {

  loginOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'USER_PROFILE',
      value: this.props.blogState.loginUser
    });
  };

  logoutOnClick = () => {
    this.props.onLogoutUser();
    this.props.onDisplayContentChange({
      name: 'PUBLICATIONS'
    });
  };

  titleGuestOnClick = () => {
    this.props.onDisplayContentChange({ name: 'LOGIN' });
  };

  render() {
    const { loginUser } = this.props.blogState;
    let resultRender,
        avatarPath = 'img/guest-avatar.png';

    if ('userid' in loginUser) {
      if (loginUser.avatar.length > 0) {
        avatarPath = loginUser.avatar;
      }
      resultRender = (
        <div className="Login">
          <DropDown>
            <p><button onClick={this.logoutOnClick} className="DropDown__MenuItem">Logout</button></p>
          </DropDown>
          <p onClick={this.loginOnClick} className="Login__Title">{loginUser.name}</p>
          <img onClick={this.loginOnClick} className="Login__Avatar" src={avatarPath} alt="user"/>
        </div>
      );
    } else {
      resultRender = (
        <div className="Login">
          <p onClick={this.titleGuestOnClick} className="Login__Title">Guest</p>
          <img onClick={this.titleGuestOnClick} className="Login__Avatar" src="img/guest-avatar.png" alt="user"/>
        </div>
      );
    }

    return resultRender;
  }
}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action });
    },
    onLogoutUser: () => {
      dispatch({ type: 'LOGOUT_USER' });
    }
  })

)(Login);