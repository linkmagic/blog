import React from 'react';
import './PostItemContent.css';

export default class PostItemContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <p className="PostItemContent">
        { children }
      </p>
    );
  }

}
