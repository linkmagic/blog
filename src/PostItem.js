import React from 'react';
import './PostItem.css';

import PostItemComments from './PostItemComments';
import RatingCounter from './RatingCounter';
import PostItemTitle from './PostItemTitle';
import PostItemDateTime from './PostItemDateTime';
import PostItemAuthor from './PostItemAuthor';
import PostItemBookmark from './PostItemBookmark';

export default class PostItem extends React.Component {

  render() {
    const { article } = this.props;

    return (
      <div className="PostItem">
        
        <PostItemTitle postItemTitle={article.title}/>
          
        <div className="PostItem__Info">
          <PostItemDateTime postItemDateTime={article.createdate} />
          <PostItemAuthor postItemAuthor={article.userid}/>
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