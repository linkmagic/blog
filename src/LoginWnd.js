import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginWnd.css';

class LoginWnd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'LOGIN'
    };
  }

  tabBtnsOnClick = (e) => {

    let tabBtns = document.getElementsByClassName('LRUser__TabTitle__Name');
    for (let i = 0; i < tabBtns.length; i++) {
      if (tabBtns[i].classList.contains('LRUser__TabTitle__Name-active')) {
        tabBtns[i].classList.remove('LRUser__TabTitle__Name-active');
      }
    }

    let clickedBtn = e.target;
    clickedBtn.classList.toggle('LRUser__TabTitle__Name-active');

    document.getElementsByClassName('LRUser__Tab__Login')[0].style.display = 'none';
    document.getElementsByClassName('LRUser__Tab__Register')[0].style.display = 'none';
    document.getElementsByClassName('LRUser__Tab__ResetPass')[0].style.display = 'none';

    let lruserElem = document.getElementsByClassName('LRUser')[0];
    switch(clickedBtn.id) {

      case 'idLoginBtn': {
        lruserElem.style.height = '200px';
        document.getElementsByClassName('LRUser__Tab__Login')[0].style.display = 'block';
        this.setState({
          activeTab: 'LOGIN'
        });
        break;
      }

      case 'idRegisterBtn': {
        lruserElem.style.height = '250px';
        document.getElementsByClassName('LRUser__Tab__Register')[0].style.display = 'block';
        this.setState({
          activeTab: 'REGISTER'
        });
        break;
      }

      case 'idResetPassBtn': {
        lruserElem.style.height = '150px';
        document.getElementsByClassName('LRUser__Tab__ResetPass')[0].style.display = 'block';
        this.setState({
          activeTab: 'RESETPASS'
        });
        break;
      }

      default : {
        return;
      }
    }

  };

  okBtnOnClick = () => {
    const { activeTab } = this.state;

    switch(activeTab) {

      case 'LOGIN' : {
        let userData = null;
        const { listUsers } = this.props.blogState;

        for (let i = 0; i < listUsers.length; i++) {
          if (listUsers[i].login === this.LoginLoginTxt.value
            && listUsers[i].password === this.LoginPasswordTxt.value)
          {
            userData = listUsers[i];
            break;
          }
        }

        if (userData) {
          let loggedinUser = {};
          Object.assign(loggedinUser, userData);
          delete loggedinUser.login;
          delete loggedinUser.password;

          this.props.onLoginUser(loggedinUser);

          this.props.onDisplayContentChange({ name: 'PUBLICATIONS' });
        } else {
          alert('Wrong Login/Password. Try again...')
        }
        break;
      }

      case 'REGISTER' : {
        if (this.RegisterLoginTxt.value.length <= 0
          || this.RegisterPasswordTxt.value.length <= 0
          || this.RegisterPasswordRepeatTxt.value.length <= 0)
        {
          alert('Fill in the fields: Login, Password, Repeat password');
          return;
        }

        if (this.RegisterPasswordTxt.value !== this.RegisterPasswordRepeatTxt.value) {
          alert('You entered different passwords');
          return;
        }

        let loginTxt = this.RegisterLoginTxt.value;
        let passwordTxt = this.RegisterPasswordTxt.value;
        const { listUsers } = this.props.blogState;

        for (let i = 0; i < listUsers.length; i++) {
          if (listUsers[i].login === loginTxt) {
            alert('User with name `' + loginTxt + '` already exists!');
            return;
          }
        }

        this.props.onAddUser({
          login: loginTxt,
          password: passwordTxt
        });

        break;
      }

      case 'RESETPASS' : {

        break;
      }

      default : return;
    }
  };

  clearBtnOnClick = () => {
    const { activeTab } = this.state;

    switch(activeTab) {

      case 'LOGIN' : {
        this.LoginLoginTxt.value = '';
        this.LoginPasswordTxt.value = '';
        break;
      }

      case 'REGISTER' : {
        this.RegisterLoginTxt.value = '';
        this.RegisterPasswordTxt.value = '';
        this.RegisterPasswordRepeatTxt.value = '';
        break;
      }

      case 'RESETPASS' : {
        this.ResetPassEmailTxt.value = '';
        break;
      }

      default : return;
    }
  };

  render() {
    return (
      <div className="LRUser">
        <div className="LRUser__TabTitles">
          <button onClick={this.tabBtnsOnClick}
                  id="idLoginBtn"
                  className="LRUser__TabTitle__Name LRUser__TabTitle__Name-active">
            Login
          </button>
          <button id="idRegisterBtn"
                  onClick={this.tabBtnsOnClick}
                  className="LRUser__TabTitle__Name">
            Register
          </button>
          <button id="idResetPassBtn"
                  onClick={this.tabBtnsOnClick}
                  className="LRUser__TabTitle__Name">
            Reset&nbsp;Password
          </button>
        </div>

        <div className="LRUser__Tabs">

          <div className="LRUser__Tab__Login">
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Login</label>
              <input className="LRUser__FieldText" type="text" defaultValue='solo17@aol.com'
                     ref={ (input) => { this.LoginLoginTxt = input; }}/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Password</label>
              <input className="LRUser__FieldTextPwd" type="password" defaultValue='solo1712345'
                     ref={ (input) => { this.LoginPasswordTxt = input; }}/>
            </div>
            <div className="LRUser__ButtonLine">
              <button className="LRUser__Button" onClick={this.okBtnOnClick}>OK</button>
              <button className="LRUser__Button" onClick={this.clearBtnOnClick}>Clear</button>
            </div>
          </div>

          <div className="LRUser__Tab__Register">
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Login</label>
              <input className="LRUser__FieldText" type="text" defaultValue="admin@blog.ua"
                     ref={ (input) => { this.RegisterLoginTxt = input; }}/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Password</label>
              <input className="LRUser__FieldTextPwd" type="password" defaultValue="admin12345"
                     ref={ (input) => { this.RegisterPasswordTxt = input; }}/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Repeat password</label>
              <input className="LRUser__FieldTextPwd" type="password" defaultValue="admin12345"
                     ref={ (input) => { this.RegisterPasswordRepeatTxt = input; }}/>
            </div>
            <div className="LRUser__ButtonLine">
              <button className="LRUser__Button" onClick={this.okBtnOnClick}>OK</button>
              <button className="LRUser__Button" onClick={this.clearBtnOnClick}>Clear</button>
            </div>
          </div>

          <div className="LRUser__Tab__ResetPass">
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">E-mail</label>
              <input className="LRUser__FieldText" type="text"
                     ref={ (input) => { this.ResetPassEmailTxt = input; }}/>
            </div>
            <div className="LRUser__ButtonLine">
              <button className="LRUser__Button" onClick={this.okBtnOnClick}>OK</button>
              <button className="LRUser__Button" onClick={this.clearBtnOnClick}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    );
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
    onLoginUser: (userInfo) => {
      dispatch({ type: 'LOGIN_USER', userInfo });
    },
    onAddUser: (userInfo) => {
      dispatch({ type: 'ADD_USER', userInfo });
    }
  })

)(LoginWnd);