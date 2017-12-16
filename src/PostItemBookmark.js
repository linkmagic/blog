import React, { Component } from 'react';
import './PostItemBookmark.css';

export default class PostItemBookmark extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <a href="#" className="post-item-bookmark-it">
        <img src="img/post-item-bookmark.png" alt="post-item-bookmark"/>
        Bookmark
      </a>
    );
  }

}
