import React from 'react';
import { connect } from 'react-redux';

import './RatingCounter.css';

class RatingCounter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.article.rating
    };
  }

  clickUp = () => {
    let { rating } = this.state;
    rating++;
    this.setState({
      rating: rating
    });
    this.props.article.rating = String(rating);
  };

  clickDown = () => {
    let { rating } = this.state;
    rating--;
    this.setState({
      rating: rating
    });
    this.props.article.rating = String(rating);
  };

  render() {
    const { rating } = this.state;
    const { loginUser } = this.props.blogState;
    let resultRender;

    if ('userid' in loginUser) {
      resultRender = (
          <div className="RatingCounter">
          <img className="RatingCounter__Btn"
               src="img/rating-down.png"
               onClick={this.clickDown}
               alt="rating-down"/>
          <p className="RatingCounter__Value">
            {rating}
          </p>
          <img className="RatingCounter__Btn"
               src="img/rating-up.png"
               onClick={this.clickUp}
               alt="rating-up"/>
        </div>
      );
    } else {
      resultRender = (
        <div className="RatingCounter">
          <img className="RatingCounter__Btn-inactive"
               src="img/rating-down.png"
               alt="rating-down"/>
          <p className="RatingCounter__Value">
            {rating}
          </p>
          <img className="RatingCounter__Btn-inactive"
               src="img/rating-up.png"
               alt="rating-up"/>
        </div>
      );
    }

    return resultRender;
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({})

)(RatingCounter);