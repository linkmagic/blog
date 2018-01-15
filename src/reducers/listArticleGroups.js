const initialState = require('.././data/articleGroups.json');

export default function listArticleGroups(state = initialState, action) {

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
