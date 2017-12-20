import React, { Component } from 'react';
import './App.css';

import NavMenu from './NavMenu';
import NavItem from './NavItem';
import Logo from './Logo';
import Search from './Search';
import Login from './Login';
import PostItem from './PostItem';
import JSONResources from './JSONResources';

function WhiteSpaceTop() {
  return (
    <div className="white-space-top" />
  );
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.jsonResources = new JSONResources();

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
          <NavMenu arrowOnClick={this.headerMenuCategoryClick}>
            <button className="DropDown__MenuItem">Все публикации</button>
            <button className="DropDown__MenuItem">Программирование</button>
            <button className="DropDown__MenuItem">Дизайн</button>
            <button className="DropDown__MenuItem">Администрирование</button>
            <button className="DropDown__MenuItem">Маркетинг</button>
          </NavMenu>
          <NavItem title={'Пользователи'}/>
          <Search/>
          <Login userName={ this.jsonResources.jsonUserData.name } />
        </header>
        <div className="content">
          <WhiteSpaceTop/>
          <div>
            <div className="posts-board">
              {
                this.jsonResources.jsonArticles.map((item, index) => {
                  return (
                    <PostItem postItemTitle = { item.title }
                              postItemDateTime = { item.createdate }
                              postItemAuthor = { item.userid }
                              postItemComments = { item.comments }
                              postItemRating = { item.rating }
                              key={index}
                    >
                      {item.body}
                    </PostItem>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

