const initialState = require('.././data/articles.json');

export default function listArticles(state = initialState, action) {

  switch(action.type) {

    case 'ADD' : {
      return state;
    }

    case 'REMOVE' : {
      return state;
    }

    case 'EDIT' : {
      return state;
    }

    default : return state;
  }
}
