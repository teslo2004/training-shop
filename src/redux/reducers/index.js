import { combineReducers } from 'redux';
import shop from './shop';
import data from './data';
import email from './email';

const rootReducer = combineReducers({
  shop,
  data,
  email,
});

export default rootReducer;
