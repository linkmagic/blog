import { combineReducers } from 'redux';

import displayContent from './displayContent';
import loginUser from './loginUser';
import listUsers from './listUsers';
import listArticles from './listArticles';
import listArticleGroups from './listArticleGroups';

export default combineReducers({
  displayContent,
  loginUser,
  listUsers,
  listArticles,
  listArticleGroups
});