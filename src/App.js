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
      <img src="img/user.png" alt="user" />
      <div className="header-panel-login-menu">
        <p><a href="#">Login</a></p>
        <p><a href="#">Logout</a></p>
        <p><a href="#">Settings</a></p>
      </div>
    </div>
  );
}

function PostRating() {
  return (
    <div className="post-item-rating">
      <img src="img/rating-down.png" alt="rating-down"/>
      <p>+107</p>
      <img src="img/rating-up.png" alt="rating-up"/>
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
          <div>
            <div className="posts-board">

              <div className="post-item">
                <h3 className="post-item-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                <div className="post-item-info-short">
                  <p className="post-item-date">2017.10.10 15:50</p>
                  <a href="#" className="post-item-author">Anatoly Vaskin</a>
                </div>
                <p className="post-item-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!</p>
                <div className="post-item-info-long">
                  <a href="#" className="post-item-comments">10 comments</a>
                  <PostRating/>
                  <a href="#" className="post-item-bookmark-it">Bkmrk</a>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
