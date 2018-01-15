import { combineReducers } from 'redux';

import displayContent from './displayContent';
import loginUser from './loginUser';

export default combineReducers({
  displayContent,
  loginUser
});