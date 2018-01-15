import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PostItem.css';

import Utils from './Utils';
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

  getArticleBodyText = (text) => {
    return (text.length <= 500) ? text : text.slice(0, 500) + '...';
  };

  render() {
    const {
      article,
      authorNickName,
      articleGroupName
    } = this.props;

    const { loginUser } = this.props.blogState;

    return (
      <div className="PostItem">

        <h3 className="PostItem__Title">
          <button onClick={this.titleOnClick}
                  className="PostItem__Title__Button"
                  dangerouslySetInnerHTML={Utils.createMarkup(article.title)}/>
        </h3>
          
        <div className="PostItem__Info">
          <PostItemDateTime postItemDateTime={article.createdate} />
          <PostItemArticleGroup articleGroupName={articleGroupName}
                                articleGroupId={this.props.article.groupid} />
          <PostItemAuthor authorNickName={authorNickName}
                          authorUserid={this.props.article.userid}/>
        </div>
        
        <div className="PostItem__Body"
             dangerouslySetInnerHTML={Utils.createMarkup(this.getArticleBodyText(article.body))}/>

        <div className="PostItem__Info">
          <PostItemComments postItemComments={article.comments.length + " comments"}/>
          <RatingCounter article={article}/>
          { ('userid' in loginUser) ? <PostItemBookmark/> : '' }
        </div>

      </div>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action});
    }
  })

)(PostItem);