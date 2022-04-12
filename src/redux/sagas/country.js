import axios from 'axios';
import { call, put, takeLatest, all } from 'redux-saga/effects';

function* loadCountry() {
  try {
    const country = yield call(axios.get, 'https://training.cleverland.by/shop/countries');
    yield put({ type: 'LOAD_SUCCESS_COUNTRY', payload: country });
  } catch (e) {
    yield put({ type: 'ERROR_LOAD_COUNTRY', payload: e });
  }
}

export default function* rootSagaCountry() {
  yield all([takeLatest('LOADING_COUNTRY', loadCountry)]);
}
