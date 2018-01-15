const initialState = require('.././data/articles.json');

export default function listArticles(state = initialState, action) {

  switch(action.type) {

    case 'ADD_ARTICLE' : {
      return state;
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
