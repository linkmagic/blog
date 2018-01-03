import React from 'react';
import './PostItemTitle.css';

export default class PostItemTitle extends React.Component {

  render() {
    return (
      <h3 className="PostItemTitle">
        {this.props.postItemTitle}
      </h3>
    );
  }

}
