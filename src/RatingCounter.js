import React, { Component } from 'react';
import './RatingCounter.css';

export default class RatingCounter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      postItemRating: 0
    };
  }

  clickUp = () => {
    let { postItemRating } = this.state;
    postItemRating++;
    this.setState({
      postItemRating: postItemRating
    });
  };

  clickDown = () => {
    let { postItemRating } = this.state;
    postItemRating--;
    this.setState({
      postItemRating: postItemRating
    });
  };

  render() {
    const { postItemRating } = this.state;

    return (
      <div className="post-item-rating">
        <img src="img/rating-down.png" alt="rating-down" onClick={this.clickDown} />
        <p>{postItemRating}</p>
        <img src="img/rating-up.png" alt="rating-up" onClick={this.clickUp}/>
      </div>
    );
  }

}