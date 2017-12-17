import React, { Component } from 'react';
import './PostItemComments.css';

export default class PostItemComments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <a href="#" className="PostItemComments">
        <img className="PostItemComments__Img" src="img/post-item-comments.png" alt="post-item-comments"/>
        {this.props.postItemComments}
      </a>
    );
  }

}