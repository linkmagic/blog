import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostItemArticleGroup.css';

class PostItemArticleGroup extends Component {

  onClick = () => {
    this.props.onDisplayContentChange('OPEN_ARTICLES_BY_GROUP');

    // this.props.onDisplayContentChange({
    //   action: 'OPEN_ARTICLES_BY_GROUP',
    //   value: this.props.articleGroupId
    // });

  };

  render() {
    const { articleGroupName } = this.props;

    return (
      <button onClick={this.onClick} className="ArticleGroup">
        {articleGroupName}
      </button>
    );
  }

}

export default connect(

  state => ({
    displayState: state
  }),

  dispatch => ({
    onDisplayContentChange: (name) => {
      dispatch({ type: 'DISPLAY_CONTENT', name});
    }
  })

)(PostItemArticleGroup);