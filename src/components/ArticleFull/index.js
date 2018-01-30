import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import Utils from '../../Utils';
import PostItemDateTime from '../PostItemDateTime';
import PostItemArticleGroup from '../PostItemArticleGroup';
import PostItemAuthor from '../PostItemAuthor';
import ArticleFullBody from '../ArticleFullBody'
import PostItemComments from '../PostItemComments';
import RatingCounter from '../RatingCounter';
import PostItemBookmark from '../PostItemBookmark';

class ArticleFull extends Component {

  render() {
    
    const {
      article,
      articleGroupName,
      authorNickname
    } = this.props;

    const { loginUser } = this.props.blogState;

    return (
      <div className="ArticleFull">

        <h3 className="ArticleFull__Title"
            dangerouslySetInnerHTML={Utils.createMarkup(article.title)}/>

        <div className="ArticleFull__Info">
          <PostItemDateTime postItemDateTime={article.createdate}/>
          <PostItemArticleGroup articleGroupName={articleGroupName}
                                articleGroupId={this.props.article.groupid}/>
          <PostItemAuthor authorNickName={authorNickname}
                          authorUserid={this.props.article.userid}/>
        </div>

        <ArticleFullBody articleBody={article.body}/>

        <div className="ArticleFull__Info">
          <PostItemComments postItemComments={this.props.article.comments.length + " comments"}/>
          <RatingCounter article={this.props.article}/>
          {('userid' in loginUser) ? <PostItemBookmark/> : ''}
        </div>

      </div>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({})

)(ArticleFull);