import React from 'react';
import './PostItemAuthor.css';

export default class PostItemAuthor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#" className="PostItemAuthor">
        <img className="PostItemAuthor__Img" src="img/post-item-author.png" alt="post-item-author"/>
        { this.props.postItemAuthor }
      </a>
    );
  }

}
