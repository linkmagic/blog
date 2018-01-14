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
        console.log('OK','LOGIN');
        break;
      }

      case 'REGISTER' : {
        console.log('OK','REGISTER');
        break;
      }

      case 'RESETPASS' : {
        console.log('OK','RESETPASS');
        break;
      }
    }
  };

  clearBtnOnClick = () => {
    const { activeTab } = this.state;
    switch(activeTab) {

      case 'LOGIN' : {
        console.log('CLEAR','LOGIN');
        break;
      }

      case 'REGISTER' : {
        console.log('CLEAR','REGISTER');
        break;
      }

      case 'RESETPASS' : {
        console.log('CLEAR','RESETPASS');
        break;
      }
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
              <input className="LRUser__FieldText" type="text"/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Password</label>
              <input className="LRUser__FieldTextPwd" type="password"/>
            </div>
            <div className="LRUser__ButtonLine">
              <button className="LRUser__Button" onClick={this.okBtnOnClick}>OK</button>
              <button className="LRUser__Button" onClick={this.clearBtnOnClick}>Clear</button>
            </div>
          </div>

          <div className="LRUser__Tab__Register">
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Login</label>
              <input className="LRUser__FieldText" type="text"/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Password</label>
              <input className="LRUser__FieldTextPwd" type="password"/>
            </div>
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">Repeat password</label>
              <input className="LRUser__FieldTextPwd" type="password"/>
            </div>
            <div className="LRUser__ButtonLine">
              <button className="LRUser__Button" onClick={this.okBtnOnClick}>OK</button>
              <button className="LRUser__Button" onClick={this.clearBtnOnClick}>Clear</button>
            </div>
          </div>

          <div className="LRUser__Tab__ResetPass">
            <div className="LRUser__FieldLine">
              <label className="LRUser__FieldLbl">E-mail</label>
              <input className="LRUser__FieldText" type="text"/>
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
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action});
    }
  })

)(LoginWnd);