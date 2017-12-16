import React, { Component } from 'react';
import './PostItemDateTime.css';

export default class PostItemDateTime extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <p className="post-item-date">
        <img src="img/post-item-calendar.png" alt="post-item-calendar"/>
        {this.props.postItemDateTime}
      </p>
    );
  }

}
