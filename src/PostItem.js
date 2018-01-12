import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostItem.css';

import PostItemComments from './PostItemComments';
import RatingCounter from './RatingCounter';
import PostItemDateTime from './PostItemDateTime';
import PostItemArticleGroup from './PostItemArticleGroup';
import PostItemAuthor from './PostItemAuthor';
import PostItemBookmark from './PostItemBookmark';

class PostItem extends Component {

  titleOnClick = () => {
    this.props.onDisplayContentChange({
      name: 'OPEN_ARTICLE',
      value: this.props.article.articleid
    });
  };

  render() {
    const {
      article,
      authorNickName,
      articleGroupName
    } = this.props;

    return (
      <div className="PostItem">

        <h3 className="PostItem__Title">
          <button onClick={this.titleOnClick} className="PostItem__Title__Button">
            {article.title}
          </button>
        </h3>
          
        <div className="PostItem__Info">
          <PostItemDateTime postItemDateTime={article.createdate} />
          <PostItemArticleGroup articleGroupName={articleGroupName}
                                articleGroupId={this.props.article.groupid} />
          <PostItemAuthor authorNickName={authorNickName}
                          authorUserid={this.props.article.userid}/>
        </div>
        
        <div className="PostItem__Body">
          {(article.body.length <= 500) ? article.body : article.body.slice(0, 500) + '...'}
        </div>
        
        <div className="PostItem__Info">
          <PostItemComments postItemComments={article.comments.length + " comments"}/>
          <RatingCounter article={article}/>
          <PostItemBookmark/>
        </div>

      </div>
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

)(PostItem);