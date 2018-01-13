import React, { Component } from 'react';

import './ArticleFull.css';

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

    let parsedHtml = new DOMParser().parseFromString(article.body, 'text/html');
    let articleBody = parsedHtml.getElementsByTagName('div')[0];
    // console.log(parsedHtml, articleBody);

    let articleBodyElem = React.createElement(
      ArticleFullBody,
      {},
      articleBody
    );
    // console.log(articleBodyElem);

    return (
      <div className="ArticleFull">

        <h3 className="ArticleFull__Title">
            {article.title}
        </h3>

        <div className="ArticleFull__Info">
          <PostItemDateTime postItemDateTime={article.createdate} />
          <PostItemArticleGroup articleGroupName={articleGroupName}
                                articleGroupId={this.props.article.groupid} />
          <PostItemAuthor authorNickName={authorNickname}
                          authorUserid={this.props.article.userid}/>
        </div>

        {articleBodyElem}

        <div className="ArticleFull__Info">
          <PostItemComments postItemComments={this.props.article.comments.length + " comments"}/>
          <RatingCounter article={this.props.article}/>
          <PostItemBookmark/>
        </div>

      </div>
    );
  }

}