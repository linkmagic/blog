/*
  let PossibleValues = [
    'PUBLICATIONS',
    'USERS',
    'SEARCH',
    'USER_PROFILE',
    'SUPPORT',
    'ABOUT'
  ];
*/

const initialState = 'USERS';

export default function displayContent(state = initialState, action) {
  if (action.type === 'DISPLAY_CONTENT') {
    return action.name;
  }
  return state;
}