import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export function* loadOrder(action) {
  console.log(action.payload);
  try {
    const data = yield call(axios.post, 'https://training.cleverland.by/shop/cart', action.payload);

    yield put({ type: 'LOAD_SUCCESS_ORDER', payload: data });
  } catch (e) {
    yield put({ type: 'LOAD_ERROR_ORDER', payload: e.message });
  }
}
export default function* rootOrder() {
  yield all([takeLatest('SEND_PAY', loadOrder)]);
}
