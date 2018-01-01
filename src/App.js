import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './App.css';

import HeaderTopSpace from './HeaderTopSpace';
import NavMenu from './NavMenu';
import NavItem from './NavItem';
import Logo from './Logo';
import Search from './Search';
import Login from './Login';
import PostItem from './PostItem';
import JSONResources from './JSONResources';
import Constants from './Constants';
import UserTable from './UserTable';
import UserProfile from './UserProfile';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contentDisplay: Constants.CONTENT_USER_PROFILE
    };

    this.jsonResources = new JSONResources();

    this.displayContent = this.displayContent.bind(this);

    this.headerMenuCategoryClick = this.headerMenuCategoryClick.bind(this);
  }

  headerMenuCategoryClick = () => {
    document.getElementById("navPanelPublicBtnExtMenuContent").classList.toggle("Component-show");
  };

  displayContent() {
    const { contentDisplay } = this.state;

    switch(contentDisplay) {

      case Constants.CONTENT_PUBLICATIONS : {
        return (
          <div className="AppContent__Container">
          {
            this.jsonResources.jsonArticles.map((article, index) => {
              return (
                <PostItem key={index} article={article}/>
              );
            })
          }
          </div>
        );
      }

      case Constants.CONTENT_USERS : {
        return (
          <div className="AppContent__Container">
            <UserTable users={this.jsonResources.jsonUsers}/>
          </div>
        );
      }

      case Constants.CONTENT_SEARCH : {
        return (
          <div className="AppContent__Container">
            <h3>SEARCH</h3>
          </div>
        );
      }

      case Constants.CONTENT_USER_PROFILE : {
        return (
          <div className="AppContent__Container">
            <UserProfile data={this.jsonResources.jsonUserData}/>
          </div>
        );
      }

    }
  }

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
          <Login userName={this.jsonResources.jsonUserData.name}/>
        </header>
        <div className="AppContent">
          <HeaderTopSpace/>
          {this.displayContent()}
        </div>
      </div>
    );
  }
}
