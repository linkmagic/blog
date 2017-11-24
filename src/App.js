import React, { Component } from 'react';

import './App.css';

function Logo() {
  return (
    <div className="logo">
      <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;dev.ua
    </div>
  );
}

function WhiteSpaceTop() {
  return (
    <div className="white-space-top" />
  );
}

function HeaderPanelLogin() {
  return (
    <div className="header-panel-login">
      <p className="login-user-name">User Name</p>
      <img src="user.png" alt="user" />
      <div class="header-panel-login-menu">
        <p><a href="#">Login</a></p>
        <p><a href="#">Logout</a></p>
        <p><a href="#">Settings</a></p>
      </div>
    </div>
  );
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <HeaderPanelLogin/>
        </header>
        <div className="content">
          <WhiteSpaceTop/>
          <p>
            line<br/>
            line<br/>
            line<br/>
            line<br/>
            line<br/>
            line<br/>
            line<br/>
            line<br/>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
