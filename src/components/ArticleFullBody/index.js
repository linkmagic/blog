import React, { Component } from 'react';

import './style.css';

import Utils from '../../Utils';

class ArticleFullBody extends Component {

  render() {
    const { articleBody } = this.props;

    return (
      <div className="ArticleFullBody"
           dangerouslySetInnerHTML={Utils.createMarkup(articleBody)}
      />
    );
  }

}

export default ArticleFullBody;