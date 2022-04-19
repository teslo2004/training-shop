import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export function* loadCity(city) {
  try {
    const data = yield call(axios.post, 'https://training.cleverland.by/shop/search/cities', {
      city: city.payload.cityName,
      country: city.payload.countryName,
    });

    yield put({ type: 'LOAD_SUCCESS_CITY', payload: data.data });
  } catch (e) {
    yield put({ type: 'LOAD_ERROR_CITY', payload: e.message });
  }
}
export default function* rootCity() {
  yield all([takeLatest('LOADING_CITY', loadCity)]);
}
