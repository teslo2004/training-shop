import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export function* loadOrder(order) {
  try {
    const data = yield call(axios.post, 'https://training.cleverland.by/shop/cart', {
      order,
    });

    yield put({ type: 'LOAD_SUCCESS_ORDER', payload: data.data });
  } catch (e) {
    yield put({ type: 'LOAD_ERROR_ORDER', payload: e.message });
  }
}
export default function* rootOrder() {
  yield all([takeLatest('LOADING_ORDER', loadOrder)]);
}
