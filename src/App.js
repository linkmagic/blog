import React, { Component } from 'react';

import './App.css';
import DropDown from "./DropDown";
import RatingCounter from "./RatingCounter";
import Logo from "./Logo";
import Search from "./Search";
import Login from './Login';
import PostItem from './PostItem';

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

              <PostItem/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
