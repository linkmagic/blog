import React, { Component } from 'react';
import './PostItemContent.css';

export default class PostItemContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <p className="post-item-content">{this.props.postItemContent}</p>
    );
  }

}
