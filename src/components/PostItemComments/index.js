import React from 'react';

import './style.css';

class PostItemComments extends React.Component {

  render() {
    return (
      <a href="" className="PostItemComments">
        <img className="PostItemComments__Img" src="img/post-item-comments.png" alt="post-item-comments"/>
        {this.props.postItemComments}
      </a>
    );
  }

}

export default PostItemComments;