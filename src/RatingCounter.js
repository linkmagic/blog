import React from 'react';
import './RatingCounter.css';

export default class RatingCounter extends React.Component {

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
    this.props.article.rating = rating;
  };

  clickDown = () => {
    let { rating } = this.state;
    rating--;
    this.setState({
      rating: rating
    });
    this.props.article.rating = rating;
  };

  render() {
    const { rating } = this.state;

    return (
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
  }

}