import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Utils from './Utils';
import HeaderTopSpace from './HeaderTopSpace';
import NavMenu from './NavMenu';
import NavItem from './NavItem';
import Logo from './Logo';
import Search from './Search';
import Login from './Login';
import LoginWnd from './LoginWnd';
import PostItem from './PostItem';
import ArticleFull from './ArticleFull';
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
    const { displayContent } = this.props.blogState;

    switch(displayContent.name) {

      case 'LOGIN' : {
        return (
          <div className="AppContent__Container">
            <LoginWnd/>
          </div>
        );
      }

      case 'PUBLICATIONS' : {
        return (
          <div className="AppContent__Container">
          {
            this.jsonResources.jsonArticles.map((article, index) => {
              return (
                <PostItem article={article}
                          authorNickName={Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid)}
                          articleGroupName={Utils.getArticleGroupNameById(this.jsonResources.jsonArticleGroups, article.groupid)}
                          key={index}
                />
              );
            })
          }
          </div>
        );
      }

      case 'USERS' : {
        return (
          <div className="AppContent__Container">
            <UserTable/>
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
        const { loginUser } = this.props.blogState;
        return (
          <div className="AppContent__Container">
            <UserProfile userData={loginUser}/>
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

      case 'ABOUT' : {
        return (
          <div className="AppContent__Container">
            ABOUT...
          </div>
        );
      }

      case 'OPEN_ARTICLE' : {
        let article = Utils.getArticleById(this.jsonResources.jsonArticles, displayContent.value);
        const nickname = Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid);
        const groupname = Utils.getArticleGroupNameById(this.jsonResources.jsonArticleGroups, article.groupid);

        return (
          <div className="AppContent__Container">
            {(article === null)
              ? <p>Article not found</p>
              : <ArticleFull article={article}
                             articleGroupName={groupname}
                             authorNickname={nickname} />
            }
          </div>
        );
      }

      case 'OPEN_ARTICLES_BY_GROUP' : {
        return (
          <div className="AppContent__Container">
            ARTICLES BY GROUP...
            <p>article group ID: {displayContent.value}</p>
          </div>
        );
      }

      case 'OPEN_OTHER_USER_PROFILE' : {
        return (
          <div className="AppContent__Container">
            <UserProfile userId={displayContent.value}/>
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
          <Login/>
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
    blogState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action });
    }
  })

)(App);