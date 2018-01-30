import initialState from '.././data/articleGroups.json';

export default function listArticleGroups(state = initialState, action) {

  switch(action.type) {

    case 'ADD_ARTICLE_GROUP' : {
      return state;
    }

    case 'REMOVE_ARTICLE_GROUP' : {
      return state;
    }

    case 'EDIT_ARTICLE_GROUP' : {
      return state;
    }

    default : return state;
  }
}
