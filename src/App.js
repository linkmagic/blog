import React, { Component } from 'react';
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

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contentDisplay: Constants.CONTENT_PUBLICATIONS
    };

    this.jsonResources = new JSONResources();

    this.publicationsClick = this.publicationsClick.bind(this);
    this.usersClick = this.usersClick.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.profileClick = this.profileClick.bind(this);
  }

  displayContent() {

    switch(this.state.contentDisplay) {

      case Constants.CONTENT_PUBLICATIONS : {
        return (
          <div className="AppContent__Container">
            {
              this.jsonResources.jsonArticles.map( (item, index) => {
                return (
                  <PostItem postItemTitle={ item.title }
                            postItemDateTime={ item.createdate }
                            postItemAuthor={ item.userid }
                            postItemComments={ item.comments }
                            postItemRating={ item.rating }
                            key={ index }
                  >
                    { item.body }
                  </PostItem>
                );
              })
            }
          </div>
        );
      }

      case Constants.CONTENT_USERS : {
        return (
          <div className="AppContent__Container">
            <h3>USERS</h3>
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

      case Constants.CONTENT_PROFILE : {
        return (
          <div className="AppContent__Container">
            <h3>PROFILE</h3>
          </div>
        );
      }

    }
  }

  publicationsClick() {
    this.setState({
      contentDisplay: Constants.CONTENT_PUBLICATIONS
    });
  };

  usersClick() {
    this.setState({
      contentDisplay: Constants.CONTENT_USERS
    });
  };

  searchClick() {
    this.setState({
      contentDisplay: Constants.CONTENT_SEARCH
    });
  };

  profileClick() {
    this.setState({
      contentDisplay: Constants.CONTENT_PROFILE
    });
  };

  render() {
    return (
      <div>
        <header>
          <Logo/>
          <NavMenu onClick={ this.publicationsClick } >
            <button className="DropDown__MenuItem">Все публикации</button>
            <button className="DropDown__MenuItem">Программирование</button>
            <button className="DropDown__MenuItem">Дизайн</button>
            <button className="DropDown__MenuItem">Администрирование</button>
            <button className="DropDown__MenuItem">Маркетинг</button>
          </NavMenu>
          <NavItem displayAreaName={ Constants.CONTENT_USERS } title={ 'Пользователи' }/>
          <Search/>
          <Login userName={ this.jsonResources.jsonUserData.name } />
        </header>
        <div className="AppContent">
          <HeaderTopSpace/>
          { this.displayContent() }
        </div>
      </div>
    );
  }
}

