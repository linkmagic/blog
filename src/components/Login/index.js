import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import DropDown from '../DropDown';

class Login extends Component {

  loginOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'USER_PROFILE',
      value: this.props.blogState.loginUser
    });
  };

  newArticleOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'CREATE_ARTICLE'
    });
  };

  editProfileOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'USER_PROFILE_EDIT'
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
    let resultRender;

    if ('userid' in loginUser) {
      resultRender = (
        <div className="Login">
          <DropDown>
            <button onClick={this.newArticleOnClick} className="DropDown__MenuItem">New article</button>
            <button onClick={this.editProfileOnClick} className="DropDown__MenuItem">Edit profile</button>
            <button onClick={this.logoutOnClick} className="DropDown__MenuItem">Logout</button>
          </DropDown>
          <p onClick={this.loginOnClick} className="Login__Title">{loginUser.name}</p>
          <img onClick={this.loginOnClick}
               className="Login__Avatar"
               src={loginUser.avatar}
               alt="user"/>
        </div>
      );
    } else {
      resultRender = (
        <div className="Login">
          <p onClick={this.titleGuestOnClick} className="Login__Title">Guest</p>
          <img onClick={this.titleGuestOnClick}
               className="Login__Avatar"
               src="img/guest-avatar.png"
               alt="user"/>
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