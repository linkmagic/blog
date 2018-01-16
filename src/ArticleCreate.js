import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ArticleCreate.css';

class ArticleCreate extends Component {

  render() {
    return (
      <div className="CreateArticle">

        <div className="CreateArticle__TabButtons">
          <button id="idEditBtn" className="CreateArticle__TabButton__Btn">
            Edit
          </button>
          <button id="idPreviewBtn" className="CreateArticle__TabButton__Btn">
            Preview
          </button>
        </div>

        <div className="CreateArticle__Create">

          <div className="CreateArticle__Head">
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Title:</label>
              <input className="CreateArticle__Text" type="text"/>
            </div>
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Group:</label>
              <select className="CreateArticle__ArticleGroup">
                <option value="1">Programming</option>
                <option value="2">Design</option>
                <option value="3">Administration</option>
                <option value="4">Marketing</option>
                <option value="5">Mobile</option>
              </select>
            </div>
          </div>

          <div className="CreateArticle__Body">
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Text:</label>
              <textarea className="CreateArticle__ArticleBody"/>
            </div>
          </div>
        </div>

        <div className="CreateArticle__Preview">
          this is a text of the article
        </div>

        <div className="CreateArticle__LineItem">
          <button className="CreateArticle__Button">Submit</button>
          <button className="CreateArticle__Button">Cancel</button>
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

)(ArticleCreate);