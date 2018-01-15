import { combineReducers } from 'redux';

import displayContent from './displayContent';
import loginUser from './loginUser';
import listUsers from './listUsers';

export default combineReducers({
  displayContent,
  loginUser,
  listUsers
});