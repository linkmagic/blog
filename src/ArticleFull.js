import React, { Component } from 'react';

import './ArticleFull.css';

import Utils from './Utils';
import PostItemDateTime from './PostItemDateTime';
import PostItemArticleGroup from './PostItemArticleGroup';
import PostItemAuthor from './PostItemAuthor';
import ArticleFullBody from './ArticleFullBody'
import PostItemComments from './PostItemComments';
import RatingCounter from './RatingCounter';
import PostItemBookmark from './PostItemBookmark';

export default class ArticleFull extends Component {

  render() {
    const {
      article,
      articleGroupName,
      authorNickname
    } = this.props;

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
          <PostItemBookmark/>
        </div>

      </div>
    );
  }

}