import { call, put } from 'redux-saga/effects';

function* loadClothes() {
  const request = yield call(fetch, 'https://training.cleverland.by/shop/products');
  const data = yield call([request, request.json]);
  return data;
}

export function* loadingBasicData() {
  yield put({ type: 'LOADING_DATA' });
}

export function* loadSuccessBasicData() {
  const data = yield loadClothes();
  yield put({ type: 'LOAD_SUCCESS_DATA', payload: data });
}
export function* loadErrorBasicData() {
  yield put({ type: 'ERROR_LOAD_DATA' });
}

export default function* rootSaga() {
  yield loadingBasicData();

  try {
    yield loadSuccessBasicData();
  } catch (e) {
    yield loadErrorBasicData(e);
  }
}
