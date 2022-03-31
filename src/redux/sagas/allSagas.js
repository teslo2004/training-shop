import { all } from 'redux-saga/effects';
import rootSaga from '.';
import emailSaga from './email';
import reviewSaga from './review';

export default function* allSagas() {
  yield all([rootSaga(), emailSaga(), reviewSaga()]);
}
