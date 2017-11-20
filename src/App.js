import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <sup>&lt;</sup>/<sub>&gt;</sub>
            &nbsp;dev.ua
          </div>
          <div className="header-panel-login">
            <img src="user.png" alt="user" />
          </div>
        </header>
        <div className="content">
          <div className="white-space-top" />
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
