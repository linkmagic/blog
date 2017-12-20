import React, { Component } from 'react';
import './PostItem.css';

import PostItemComments from './PostItemComments';
import RatingCounter from './RatingCounter';
import PostItemTitle from './PostItemTitle';
import PostItemContent from './PostItemContent';
import PostItemDateTime from './PostItemDateTime';
import PostItemAuthor from './PostItemAuthor';
import PostItemBookmark from './PostItemBookmark';

export default class PostItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      postItemTitle,
      postItemDateTime,
      postItemAuthor,
      postItemComments,
      postItemRating,
      children
    } = this.props;

    return (

      <div className="PostItem">
        
        <PostItemTitle postItemTitle={postItemTitle}/>
          
        <div className="PostItem__Info">
          <PostItemDateTime postItemDateTime={postItemDateTime} />
          <PostItemAuthor postItemAuthor={postItemAuthor}/>
        </div>
        
        <PostItemContent>
          {children}
        </PostItemContent>
        
        <div className="PostItem__Info">
          <PostItemComments postItemComments={postItemComments + " comments"}/>
          <RatingCounter postItemRating={postItemRating}/>
          <PostItemBookmark/>
        </div>

      </div>

    );
  }

}