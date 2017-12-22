import React from 'react';
import './Search.css';

export default class Search extends React.Component {

  render() {
    return (
      <div className="Search">
        <input className="Search__Text" type="text" placeholder="Search" />
        <img className="Search__TextImgSearch" src="./img/search.png" alt="search"/>
      </div>
    );
  }

}