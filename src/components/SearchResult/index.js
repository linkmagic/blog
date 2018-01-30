import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import Utils from '../../Utils';
import PostItem from '../PostItem';

class SearchResult extends Component {

  render() {
    let { searchFor, searchResult } = this.props;

    return (
      <div className="SearchResult">
        <div className="SearchResult__Title">
          Search result for "{searchFor}":
        </div>
        <div className="SearchResult__Publications">
        {
          searchResult.map((article, index) => {
            return (
              <PostItem article={article}
                        authorNickName={Utils.getAuthorNicknameById(this.props.blogState.listUsers, article.userid)}
                        articleGroupName={Utils.getArticleGroupNameById(this.props.blogState.listArticleGroups, article.groupid)}
                        key={index}
              />
            );
          })
        }
        </div>
      </div>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({})

)(SearchResult);