import { combineReducers } from 'redux';
import shop from './shop';
import data from './data';

const rootReducer = combineReducers({
  shop,
  data,
});

export default rootReducer;
