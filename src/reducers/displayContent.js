/*
  PossibleValues:
    'LOGIN'
    'PUBLICATIONS'
    'USERS'
    'SEARCH'
    'USER_PROFILE'
    'SUPPORT'
    'ABOUT'
    'OPEN_ARTICLE'
    'OPEN_ARTICLES_BY_GROUP'
    'OPEN_OTHER_USER_PROFILE'
    'CREATE_ARTICLE'
*/

const initialState = {
  name: 'PUBLICATIONS'
};

export default function displayContent(state = initialState, action) {
  if (action.type === 'DISPLAY_CONTENT') {
    return action.action;
  }
  return state;
}