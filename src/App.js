import React, { Component } from 'react';

import './App.css';

function Logo() {
  return (
    <div className="logo">
      <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;dev.ua
    </div>
  );
}

function HeaderPanelLogin() {
  return (
    <div className="header-panel-login">
      <img src="user.png" alt="user" />
    </div>
  );
}

function WhiteSpaceTop() {
  return (
    <div className="white-space-top" />
  );
}

class App extends Component {
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
