import React from 'react';
import './PostItemBookmark.css';

export default class PostItemBookmark extends React.Component {

  render() {
    return (
      <a href="" className="PostItemBookmark">
        <img className="PostItemBookmark__Img" src="img/post-item-bookmark.png" alt="post-item-bookmark"/>
        Bookmark
      </a>
    );
  }

}
