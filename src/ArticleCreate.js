import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ArticleCreate.css';
import Utils from './Utils';

class ArticleCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'EDIT',
      title: '',
      body: ''
    };
  }

  tabBtnsOnClick = (e) => {

    let tabBtns = document.getElementsByClassName('CreateArticle__TabButton__Btn');
    for (let i = 0; i < tabBtns.length; i++) {
      if (tabBtns[i].classList.contains('CreateArticle__TabButton__Btn-active')) {
        tabBtns[i].classList.remove('CreateArticle__TabButton__Btn-active');
      }
    }

    let clickedBtn = e.target;
    clickedBtn.classList.toggle('CreateArticle__TabButton__Btn-active');

    document.getElementsByClassName('CreateArticle__Create')[0].style.display = 'none';
    document.getElementsByClassName('CreateArticle__Preview')[0].style.display = 'none';

    switch(clickedBtn.id) {

      case 'idEditBtn': {
        this.setState({
          activeTab: 'EDIT',
          title: '',
          body: ''
        });
        document.getElementsByClassName('CreateArticle__Create')[0].style.display = 'block';
        break;
      }

      case 'idPreviewBtn': {
        this.setState({
          activeTab: 'PREVIEW',
          title: this.ArticleTitleText.value,
          body: this.ArticleBodyText.value
        });
        document.getElementsByClassName('CreateArticle__Preview')[0].style.display = 'block';
        break;
      }

      default : {
        return;
      }
    }

  };

  submitBtnOnClick = () => {
    if (this.ArticleTitleText.value === '' || this.ArticleBodyText.value === '') {
      alert('Fields `Title` and `Text` must be filled');
      return;
    }

    const { loginUser } = this.props.blogState;

    this.props.onArticleAdd({
      userId: loginUser.userid,
      articleTitle: this.ArticleTitleText.value,
      articleGroupId: (this.ArticleGroupSelect.options[this.ArticleGroupSelect.selectedIndex]).getAttribute('value'),
      articleBody: this.ArticleBodyText.value
    });

    this.props.onDisplayContentChange({ name: 'PUBLICATIONS' });
  };

  cancelBtnOnClick = () => {
    this.props.onDisplayContentChange({ name: 'PUBLICATIONS' });
  };

  combineTextForPreview = (title, body) => {
    return Utils.createMarkup(title + '<br>' + body);
  };

  componentDidMount() {
    this.ArticleTitleText.focus();
  }

  render() {
    const { listArticleGroups } = this.props.blogState;

    return (
      <div className="CreateArticle">

        <div className="CreateArticle__TabButtons">
          <button onClick={this.tabBtnsOnClick}
                  id="idEditBtn"
                  className="CreateArticle__TabButton__Btn CreateArticle__TabButton__Btn-active">
            Edit
          </button>
          <button onClick={this.tabBtnsOnClick}
                  id="idPreviewBtn"
                  className="CreateArticle__TabButton__Btn">
            Preview
          </button>
        </div>

        <div className="CreateArticle__Create">

          <div className="CreateArticle__Head">
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Title:</label>
              <input className="CreateArticle__Text" type="text"
                     ref={(input) => { this.ArticleTitleText = input; }}/>
            </div>
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Group:</label>
              <select className="CreateArticle__ArticleGroup"
                      ref={(select) => { this.ArticleGroupSelect = select; }}>
                {
                  listArticleGroups.map((group, index) => {
                    return (
                      <option key={index} value={group.groupid}>{group.name}</option>
                    );
                  })
                }
              </select>
            </div>
          </div>

          <div className="CreateArticle__Body">
            <div className="CreateArticle__LineItem">
              <label className="CreateArticle__Label">Text:</label>
              <textarea className="CreateArticle__ArticleBody"
                        ref={(textarea) => { this.ArticleBodyText = textarea; }}/>
            </div>
          </div>
        </div>

        <div className="CreateArticle__Preview">
          <div className="CreateArticle__Preview__Article"
               dangerouslySetInnerHTML={this.combineTextForPreview(this.state.title, this.state.body)}/>
        </div>

        <div className="CreateArticle__LineItem__Buttons">
          <button onClick={this.submitBtnOnClick} className="CreateArticle__Button">Submit</button>
          <button onClick={this.cancelBtnOnClick} className="CreateArticle__Button">Cancel</button>
        </div>

      </div>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action });
    },
    onArticleAdd: (articleInfo) => {
      dispatch({ type: 'ADD_ARTICLE', articleInfo });
    }
  })

)(ArticleCreate);