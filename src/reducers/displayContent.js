/*
  let PossibleValues = [
    'PUBLICATIONS',
    'USERS',
    'SEARCH',
    'USER_PROFILE',
    'SUPPORT',
    'ABOUT',
    'OPEN_ARTICLE',
    'OPEN_ARTICLES_BY_GROUP',
    'OPEN_OTHER_USER_PROFILE'
  ];
*/

const initialState = 'PUBLICATIONS';

export default function displayContent(state = initialState, action, value) {
  if (action.type === 'DISPLAY_CONTENT') {
    // console.log(action);
    return action.name;
  }
  return state;
}