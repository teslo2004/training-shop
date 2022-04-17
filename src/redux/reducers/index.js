import { combineReducers } from 'redux';
import shop from './shop';
import data from './data';
import email from './email';
import review from './review';
import country from './country';
import city from './city';
import order from './order';

const rootReducer = combineReducers({
  shop,
  data,
  email,
  review,
  country,
  city,
  order,
});

export default rootReducer;
