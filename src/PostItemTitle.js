import React, { Component } from 'react';
import './PostItemTitle.css';

export default class PostItemTitle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <h3 className="PostItemTitle">
        {this.props.postItemTitle}
      </h3>
    );
  }

}