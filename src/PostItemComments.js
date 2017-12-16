import React, { Component } from 'react';
import './PostItemComments.css';

export default class PostItemComments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <a href="#" className="post-item-comments">
        <img src="img/post-item-comments.png" alt="post-item-comments"/>
        {this.props.postItemComments}
      </a>
    );
  }

}