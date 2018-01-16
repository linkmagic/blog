import Utils from '../Utils';

const initialState = require('.././data/articles.json');

export default function listArticles(state = initialState, action) {

  switch(action.type) {

    case 'ADD_ARTICLE' : {
      return [
        ...state,
        {
          articleid: Utils.getId(),
          groupid: action.articleInfo.articleGroupId,
          userid: action.articleInfo.userId,
          createdate: Utils.getDateNow(),
          rating: '0',
          comments: [],
          title: action.articleInfo.articleTitle,
          body: action.articleInfo.articleBody
        }
      ];
    }

    case 'REMOVE_ARTICLE' : {
      return state;
    }

    case 'EDIT_ARTICLE' : {
      return state;
    }

    default : return state;
  }
}
