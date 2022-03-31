import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

export function* sendReview(review) {
  console.log(review.values);
  try {
    yield call(axios.post, 'https://training.cleverland.by/shop/product/review', {
      id: review.values.id,
      name: review.values.nameUser,
      text: review.values.comment,
      rating: review.values.raiting,
    });
    yield put({ type: 'SEND_SUCCESS_REVIEW' });
  } catch (e) {
    yield put({ type: 'SEND_ERROR_REVIEW', payload: e.message });
  }
}
export default function* reviewSaga() {
  yield all([takeLatest('SEND_REVIEW', sendReview)]);
}
