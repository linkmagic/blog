import React, { Component } from 'react';

import './App.css';
import DropDown from "./DropDown";


function Logo() {
  return (
    <div className="logo">
      <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;dev.ua
    </div>
  );
}

function HeaderMenu(props) {
  return (
    <nav className="header-nav-panel">
      <DropDown title="Все публикации">
        <p><button className="dropdown-content-btn-style">Программирование</button></p>
        <p><button className="dropdown-content-btn-style">Дизайн</button></p>
        <p><button className="dropdown-content-btn-style">Администрирование</button></p>
        <p><button className="dropdown-content-btn-style">Маркетинг</button></p>
        <p><button className="dropdown-content-btn-style">Гаджеты</button></p>
        <p><button className="dropdown-content-btn-style">Наука</button></p>
      </DropDown>
    </nav>
  );
}

function HeaderSearchPanel() {
  return(
    <div className="header-search-panel">
      SEARCH
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

function PostItemTitle(props) {
  return (
    <h3 className="post-item-title">{props.postItemTitle}</h3>
  );
}

function PostItemContent(props) {
  return (
    <p className="post-item-content">{props.postItemContent}</p>
  );
}

function PostItemDateTime(props) {
  return (
    <p className="post-item-date">
      <img src="img/post-item-calendar.png" alt="post-item-calendar"/>
      {props.postItemDateTime}
    </p>
  );
}

function PostItemAuthor(props) {
  return (
    <a href="#" className="post-item-author">
      <img src="img/post-item-author.png" alt="post-item-author"/>
      {props.postItemAuthor}
    </a>
  );
}

function PostItemComments(props) {
  return (
    <a href="#" className="post-item-comments">
      <img src="img/post-item-comments.png" alt="post-item-comments"/>
      {props.postItemComments}
    </a>
  );
}

function PostItemRating(props) {
  return (
    <div className="post-item-rating">
      <img src="img/rating-down.png" alt="rating-down"/>
      <p>{props.postItemRating}</p>
      <img src="img/rating-up.png" alt="rating-up"/>
    </div>
  );
}

function PostItemBookmark(props) {
  return (
    <a href="#" className="post-item-bookmark-it">
      <img src="img/post-item-bookmark.png" alt="post-item-bookmark"/>
      Bookmark
    </a>
  );
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.headerMenuCategoryClick = this.headerMenuCategoryClick.bind(this);
  }

  headerMenuCategoryClick() {
    document.getElementById("navPanelPublicBtnExtMenuContent").classList.toggle("show-component");
  };

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <HeaderMenu arrowOnClick={this.headerMenuCategoryClick}/>
          <HeaderSearchPanel/>
          <HeaderPanelLogin/>
        </header>
        <div className="content">
          <WhiteSpaceTop/>
          <div>
            <div className="posts-board">

              <div className="post-item">
                <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <div className="post-item-info-short">
                  <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
                  <PostItemAuthor postItemAuthor={"Vasya Vaskin"}/>
                </div>
                <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
                <div className="post-item-info-long">
                  <PostItemComments postItemComments={"17 comments"}/>
                  <PostItemRating postItemRating={"+109"}/>
                  <PostItemBookmark/>
                </div>
              </div>

              <div className="post-item">
                <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <div className="post-item-info-short">
                  <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
                  <PostItemAuthor postItemAuthor={"Vasya Vaskin"}/>
                </div>
                <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
                <div className="post-item-info-long">
                  <PostItemComments postItemComments={"17 comments"}/>
                  <PostItemRating postItemRating={"+109"}/>
                  <PostItemBookmark/>
                </div>
              </div>

              <div className="post-item">
                <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <div className="post-item-info-short">
                  <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
                  <PostItemAuthor postItemAuthor={"Vasya Vaskin"}/>
                </div>
                <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
                <div className="post-item-info-long">
                  <PostItemComments postItemComments={"17 comments"}/>
                  <PostItemRating postItemRating={"+109"}/>
                  <PostItemBookmark/>
                </div>
              </div>

              <div className="post-item">
                <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <div className="post-item-info-short">
                  <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
                  <PostItemAuthor postItemAuthor={"Vasya Vaskin"}/>
                </div>
                <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
                <div className="post-item-info-long">
                  <PostItemComments postItemComments={"17 comments"}/>
                  <PostItemRating postItemRating={"+109"}/>
                  <PostItemBookmark/>
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
