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

  constructor(props) {
    super(props);

    this.state = {
      articleId: this.props.article.articleid,
      articleGroupId: this.props.article.groupid,
      userId: this.props.article.userid
    };
  }

  titleOnClick = () => {
    console.log(this.state.articleId);
    this.props.onDisplayContentChange('OPEN_ARTICLE');
  };

  articleGroupOnClick = () => {
    console.log(this.state.articleGroupId);
    this.props.onDisplayContentChange('OPEN_ARTICLES_BY_GROUP');
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
                                articleGroupId={this.state.articleGroupId} />
          <PostItemAuthor authorNickName={authorNickName} authorUserId={this.state.userId}/>
        </div>
        
        <div className="PostItem__Body">
          {(article.body.length <= 500) ? article.body : article.body.slice(0, 500) + '...'}
        </div>
        
        <div className="PostItem__Info">
          <PostItemComments postItemComments={article.comments.length + " comments"}/>
          <RatingCounter postItemRating={article.rating}/>
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
    onDisplayContentChange: (name) => {
      dispatch({ type: 'DISPLAY_CONTENT', name});
    }
  })

)(PostItem);