import React, { Component } from 'react';
import './PostItem.css';

import PostItemComments from './PostItemComments';
import RatingCounter from './RatingCounter';
import PostItemTitle from './PostItemTitle';
import PostItemContent from './PostItemContent';
import PostItemDateTime from './PostItemDateTime';
import PostItemAuthor from './PostItemAuthor';
import PostItemBookmark from './PostItemBookmark';

export default class PostItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (

      <div className="post-item">
        
        <PostItemTitle postItemTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
          
        <div className="post-item-info-short">
          <PostItemDateTime postItemDateTime={"2017.07.07 17:15"} />
          <PostItemAuthor postItemAuthor={"John Q."}/>
        </div>
        
        <PostItemContent postItemContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem! consectetur adipisicing elit. Accusantium aliquid architecto atque beatae earum enim error, impedit in ipsam laboriosam non odit possimus quas quia quibusdam soluta ullam, vel, voluptatem!"/>
        
        <div className="post-item-info-long">
          <PostItemComments postItemComments={"17 comments"}/>
          <RatingCounter/>
          <PostItemBookmark/>
        </div>

      </div>

    );
  }

}