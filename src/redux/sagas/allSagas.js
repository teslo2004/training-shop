import { all } from 'redux-saga/effects';
import rootSaga from '.';
import emailSaga from './email';
import reviewSaga from './review';
import rootSagaCountry from './country';
import rootCity from './city';

export default function* allSagas() {
  yield all([rootSaga(), emailSaga(), reviewSaga(), rootSagaCountry(), rootCity()]);
}
