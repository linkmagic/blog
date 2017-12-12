import React, { Component } from 'react';

import './App.css';
import DropDown from "./DropDown";
import RatingCounter from "./RatingCounter";
import Logo from "./Logo";
import Search from "./Search";
import Login from './Login';

function HeaderMenu(props) {
  return (
    <nav className="header-nav-panel">
      <DropDown title="Все публикации">
        <button className="DropDown__MenuItem">Программирование</button>
        <button className="DropDown__MenuItem">Дизайн</button>
        <button className="DropDown__MenuItem">Администрирование</button>
        <button className="DropDown__MenuItem">Маркетинг</button>
        {/*"Программирование"*/}
        {/*function() { console.log('Программирование') }*/}
        {/*"Дизайн"*/}
        {/*function() { console.log('Дизайн') }*/}
        {/*"Администрирование"*/}
        {/*function() { console.log('Администрирование') }*/}
        {/*"Маркетинг"*/}
        {/*function() { console.log('Маркетинг') }*/}
      </DropDown>
    </nav>
  );
}

function WhiteSpaceTop() {
  return (
    <div className="white-space-top" />
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
    this.state = {};
    this.headerMenuCategoryClick = this.headerMenuCategoryClick.bind(this);
  }

  headerMenuCategoryClick = () => {
    document.getElementById("navPanelPublicBtnExtMenuContent").classList.toggle("Component-show");
  };

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <HeaderMenu arrowOnClick={this.headerMenuCategoryClick}/>
          <Search/>
          <Login userName="John Q." />
        </header>
        <div className="content">
          <WhiteSpaceTop/>
          <div>
            <div className="posts-board">

              <div className="post-item">
                <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <div className="post-item-info-short">
                  <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
                  <PostItemAuthor postItemAuthor={"John Q."}/>
                </div>
                <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
                <div className="post-item-info-long">
                  <PostItemComments postItemComments={"17 comments"}/>
                  <RatingCounter/>
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
