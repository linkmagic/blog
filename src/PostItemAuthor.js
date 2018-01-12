import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostItemAuthor.css';

class PostItemAuthor extends Component {

  onClick = () => {
    this.props.onDisplayContentChange({
      name: 'OPEN_OTHER_USER_PROFILE',
      value: this.props.authorUserid
    });
  };

  render() {
    const { authorNickName } = this.props;

    return (
      <button onClick={this.onClick} className="PostItemAuthor">
        <img className="PostItemAuthor__Img"
             src="img/post-item-author.png" alt="post-item-author"
        />
        {authorNickName}
      </button>
    );
  }

}

export default connect(

  state => ({
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action});
    }
  })

)(PostItemAuthor);