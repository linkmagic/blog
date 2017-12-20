import React, { Component } from 'react';
import './PostItemAuthor.css';

export default class PostItemAuthor extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <a href="#" className="PostItemAuthor">
        <img className="PostItemAuthor__Img" src="img/post-item-author.png" alt="post-item-author"/>
        {this.props.postItemAuthor}
      </a>
    );
  }

}
