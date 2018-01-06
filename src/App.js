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
import UserTable from './UserTable';
import UserProfile from './UserProfile';
import SearchResult from './SearchResult';
import PanelHorizSpace from './PanelHorizSpace';
import SiteCopyrightLabel from './SiteCopyrightLabel';
import ItemSocialNetwork from './ItemSocialNetwork';
import SupportForm from './SupportForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.jsonResources = new JSONResources();
  }

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

      case 'SUPPORT' : {
        return (
            <div className="AppContent__Container">
              <SupportForm/>
            </div>
        );
      }

      default: return;
    }
  };

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <NavMenu menuTitle={'All publications'} >
            <button className="DropDown__MenuItem">Programming</button>
            <button className="DropDown__MenuItem">Design</button>
            <button className="DropDown__MenuItem">Administration</button>
            <button className="DropDown__MenuItem">Marketing</button>
          </NavMenu>
          <NavItem displayContentName={'USERS'} title={'All Users'}/>
          <Login userData={this.jsonResources.jsonUserData}/>
          <Search/>
        </header>
        <div className="AppContent">
          <HeaderTopSpace/>
          {this.displayContent()}
        </div>
        <footer>
          <div>
            <Logo/>
            <PanelHorizSpace spaceWidth={10}/>
            <SiteCopyrightLabel beginYearValue={2017}/>
          </div>
          <div>
            <NavItem displayContentName={'ABOUT'} title={'About'}/>
            <PanelHorizSpace spaceWidth={50}/>
            <NavItem displayContentName={'SUPPORT'} title={'Support'}/>
          </div>
          <div>
            <ItemSocialNetwork iconName={'f'} sitePath={'https://www.facebook.com/'}/>
            <PanelHorizSpace spaceWidth={15}/>
            <ItemSocialNetwork iconName={'t'} sitePath={'https://twitter.com/'}/>
            <PanelHorizSpace spaceWidth={15}/>
            <ItemSocialNetwork iconName={'l'} sitePath={'https://www.linkedin.com'}/>
            <PanelHorizSpace spaceWidth={15}/>
            <ItemSocialNetwork iconName={'g'} sitePath={'https://plus.google.com/'}/>
            <PanelHorizSpace spaceWidth={15}/>
          </div>
        </footer>
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