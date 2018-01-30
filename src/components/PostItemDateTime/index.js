import React from 'react';

import './style.css';

class PostItemDateTime extends React.Component {

  render() {
    return (
      <p className="PostItemDate">
        <img className="PostItemDate__Img" src="img/post-item-calendar.png" alt="post-item-calendar"/>
        {this.props.postItemDateTime}
      </p>
    );
  }

}

export default PostItemDateTime;