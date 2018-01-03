import React, { Component } from 'react';
import { connect } from 'react-redux';

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
import SearchResult from './SearchResult';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contentDisplay: Constants.CONTENT_PUBLICATIONS
    };

    this.jsonResources = new JSONResources();
  }

  headerMenuCategoryClick = () => {
    document.getElementById("navPanelPublicBtnExtMenuContent").classList.toggle("Component-show");
  };

  displayContent = () => {
    const { displayContent } = this.props.displayState;

    switch(displayContent) {

      case 'PUBLICATIONS' : {
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

      case 'USERS' : {
        return (
          <div className="AppContent__Container">
            <UserTable users={this.jsonResources.jsonUsers}/>
          </div>
        );
      }

      case 'SEARCH' : {
        return (
          <div className="AppContent__Container">
            <SearchResult/>
          </div>
        );
      }

      case 'USER_PROFILE' : {
        return (
          <div className="AppContent__Container">
            <UserProfile data={this.jsonResources.jsonUserData}/>
          </div>
        );
      }

      default: return;

    }
  }

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <NavMenu menuTitle={'All publications'} arrowOnClick={this.headerMenuCategoryClick}>
            <button className="DropDown__MenuItem">Programming</button>
            <button className="DropDown__MenuItem">Design</button>
            <button className="DropDown__MenuItem">Administration</button>
            <button className="DropDown__MenuItem">Marketing</button>
          </NavMenu>
          <NavItem displayContentName={'USERS'} title={'All Users'}/>
          <Login userName={this.jsonResources.jsonUserData.name}/>
          <Search/>
        </header>
        <div className="AppContent">
          <HeaderTopSpace/>
          {this.displayContent()}
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
    onDisplayContentChange: (name) => {
      dispatch({ type: 'DISPLAY_CONTENT', name});
    }
  })

)(App);