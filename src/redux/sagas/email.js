import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export function* sendEmail() {
  try {
    const email = yield call(axios.post, 'https://training.cleverland.by/shop/email');
    yield put({ type: 'SEND_SUCCESS_EMAIL', payload: email });
  } catch (e) {
    yield put({ type: 'SEND_ERROR_EMAIL', payload: e });
  }
}
export default function* emailSaga() {
  yield all([takeLatest('SEND_EMAIL', sendEmail)]);
}
