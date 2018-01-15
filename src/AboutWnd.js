import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AboutWnd.css';

class AboutWnd extends Component {

  render() {
    const {
      listUsers,
      listArticleGroups,
      listArticles
    } = this.props.blogState;

    return (
      <div className="About">
        <h3 className="About__Title">Welcome to our BLOG!</h3>
        <div className="About__Description">Here you can find the best publications on modern technologies and trends.</div>
        <div>
          <div className="About__Statistic">Some statistics:</div>
          <div className="About__Statistic__Item">Article groups: {listArticleGroups.length}</div>
          <div className="About__Statistic__Item">Articles: {listArticles.length}</div>
          <div className="About__Statistic__Item">Users: {listUsers.length}</div>
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

)(AboutWnd);