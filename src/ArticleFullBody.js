import React, { Component } from 'react';

import './ArticleFullBody.css';

import Utils from './Utils';

export default class ArticleFullBody extends Component {

  render() {
    const { articleBody } = this.props;

    return (
      <div className="ArticleFullBody"
           dangerouslySetInnerHTML={Utils.createMarkup(articleBody)}
      />
    );
  }

}