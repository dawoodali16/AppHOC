import { combineReducers } from 'redux';

import commentsReducer from '../reducers/comment';
import authReducer from './auth';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
