import { combineReducers } from 'redux';
import shop from './shop';
import data from './data';
import email from './email';
import review from './review';

const rootReducer = combineReducers({
  shop,
  data,
  email,
  review,
});

export default rootReducer;
