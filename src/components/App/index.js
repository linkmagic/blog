import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import Utils from '../../Utils';
import HeaderTopSpace from '../HeaderTopSpace';
import NavMenu from '../NavMenu';
import NavItem from '../NavItem';
import Logo from '../Logo';
import Search from '../Search';
import Login from '../Login';
import LoginWnd from '../LoginWnd';
import PostItem from '../PostItem';
import ArticleFull from '../ArticleFull';
import UserTable from '../UserTable';
import UserProfile from '../UserProfile';
import UserProfileEdit from '../UserProfileEdit';
import SearchResult from '../SearchResult';
import PanelHorizSpace from '../PanelHorizSpace';
import SiteCopyrightLabel from '../SiteCopyrightLabel';
import ItemSocialNetwork from '../ItemSocialNetwork';
import SupportForm from '../SupportForm';
import AboutWnd from '../About';
import ArticleCreate from '../ArticleCreate';

class App extends Component {

  displayContent = () => {
    const { displayContent } = this.props.blogState;

    switch(displayContent.name) {

      case 'LOGIN' : {
        return (
          <div className="App__Content__Container">
            <LoginWnd/>
          </div>
        );
      }

      case 'PUBLICATIONS' : {
        return (
          <div className="App__Content__Container">
          {
            this.props.blogState.listArticles.map((article, index) => {
              return (
                <PostItem article={article}
                          authorNickName={Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid)}
                          articleGroupName={Utils.getArticleGroupNameById(this.props.blogState.listArticleGroups, article.groupid)}
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
          <div className="App__Content__Container">
            <UserTable/>
          </div>
        );
      }

      case 'SEARCH' : {
        const { displayContent } = this.props.blogState;
        let { listArticles } = this.props.blogState;
        let searchResult = [];

        for (let i = 0; i < listArticles.length; i++) {
          if (listArticles[i].title.indexOf(displayContent.value) > 0
            || listArticles[i].body.indexOf(displayContent.value) > 0)
          {
            searchResult.push(listArticles[i]);
          }
        }

        return (
          <div className="App__Content__Container">
            <SearchResult searchFor={displayContent.value} searchResult={searchResult}/>
          </div>
        );
      }

      case 'USER_PROFILE' : {
        const { loginUser } = this.props.blogState;
        return (
          <div className="App__Content__Container">
            <UserProfile userData={loginUser}/>
          </div>
        );
      }

      case 'USER_PROFILE_EDIT' : {
        let { loginUser } = this.props.blogState;
        return (
          <div className="App__Content__Container">
            <UserProfileEdit userData={loginUser}/>
          </div>
        );
      }

      case 'SUPPORT' : {
        return (
            <div className="App__Content__Container">
              <SupportForm/>
            </div>
        );
      }

      case 'ABOUT' : {
        return (
          <div className="App__Content__Container">
            <AboutWnd/>
          </div>
        );
      }

      case 'OPEN_ARTICLE' : {
        let article = Utils.getArticleById(this.props.blogState.listArticles, displayContent.value);
        const nickname = Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid);
        const groupname = Utils.getArticleGroupNameById(this.props.blogState.listArticleGroups, article.groupid);

        return (
          <div className="App__Content__Container">
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
        const { displayContent } = this.props.blogState;
        let { listArticles } = this.props.blogState;
        let searchResult = [];

        for (let i = 0; i < listArticles.length; i++) {
          if (listArticles[i].groupid === displayContent.value) {
            searchResult.push(listArticles[i]);
          }
        }

        return (
          <div className="App__Content__Container">
            {
              searchResult.map((article, index) => {
                return (
                  <PostItem article={article}
                            authorNickName={Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid)}
                            articleGroupName={Utils.getArticleGroupNameById(this.props.blogState.listArticleGroups, article.groupid)}
                            key={index}
                  />
                );
              })
            }
          </div>
        );
      }

      case 'OPEN_OTHER_USER_PROFILE' : {
        return (
          <div className="App__Content__Container">
            <UserProfile userId={displayContent.value}/>
          </div>
        );
      }

      case 'CREATE_ARTICLE' : {
        return (
          <div className="App__Content__Container">
            <ArticleCreate/>
          </div>
        );
      }

      default: return;
    }
  };

  render() {
    return (
      <div className="AppContainer">
        <header className="App__Header" ref={(header) => { this.headerDivElem = header; }}>
          <Logo/>
          <NavMenu menuTitle={'All'}/>
          <NavItem displayContentName={'USERS'} title={'Users'}/>
          <Login/>
          <Search/>
        </header>
        <div className="App__Content" ref={(div) => { this.appContentDivElem = div; }}>
          <HeaderTopSpace/>
          {this.displayContent()}
        </div>
        <footer className="App__Footer" ref={(footer) => { this.footerDivElem = footer; }}>
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

  dispatch => ({})

)(App);