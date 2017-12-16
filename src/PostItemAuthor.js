import React, { Component } from 'react';
import './PostItemAuthor.css';

export default class PostItemAuthor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <a href="#" className="post-item-author">
        <img src="img/post-item-author.png" alt="post-item-author"/>
        {this.props.postItemAuthor}
      </a>
    );
  }

}
