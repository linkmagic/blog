import React, { Component } from 'react';
import './PostItemContent.css';

export default class PostItemContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <p className="PostItemContent">
        {children}
      </p>
    );
  }

}
