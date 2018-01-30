import React from 'react';
import './PostItemTitle.css';

class PostItemTitle extends React.Component {

  render() {
    return (
      <h3 className="PostItemTitle">
        {this.props.postItemTitle}
      </h3>
    );
  }

}

export default PostItemTitle;