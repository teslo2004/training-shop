import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* loadProducts() {
  try {
    const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');

    yield put({ type: 'LOAD_SUCCESS_DATA', payload: data });
  } catch (e) {
    yield put({ type: 'ERROR_LOAD_DATA', payload: e });
  }
}

export default function* rootSaga() {
  yield takeEvery('LOADING_DATA', loadProducts);
}
