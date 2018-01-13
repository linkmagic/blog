import React, { Component } from 'react';

import './ArticleFullBody.css';

export default class ArticleFullBody extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="ArticleFullBody">
        {children}
      </div>
    );
  }

}