import { all } from 'redux-saga/effects';
import rootSaga from '.';
import emailSaga from './email';

export default function* allSagas() {
  yield all([rootSaga(), emailSaga()]);
}
