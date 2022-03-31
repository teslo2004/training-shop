import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Raiting } from '../Clothes/Raiting/Raiting';
import './review-form.scss';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReviewForm = () => {
  const { id } = useParams();
  const review = useSelector((state) => state.review);

  const dispatch = useDispatch();
  let [star, setStar] = useState(1);

  const handleChangeStar = (e) => {
    //star = e.target.alt;
    setStar(e.target.alt);
    //return star;
  };

  const initialValues = {
    id: id,
    nameUser: '',
    comment: '',
  };

  const onSubmit = (values) => {
    values.raiting = Number(star);
    dispatch({ type: 'SEND_REVIEW', values });
    formik.resetForm();
  };

  const validationSchema = Yup.object({
    nameUser: Yup.string().required('Введите имя'),
    comment: Yup.string().required('Введите отзыв'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="review-form" data-test-id="review-modal">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-title">
          <h2>Write a review</h2>
        </div>
        <div className="form-raiting">
          <Raiting raiting={star} name="rating" onClickStar={handleChangeStar} />
        </div>
        <div className="form">
          <div className="input-form">
            <input
              data-test-id="review-name-field"
              id="nameUser"
              type="text"
              name="nameUser"
              placeholder="Имя"
              value={formik.values.nameUser}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.nameUser ? <div className="error">{formik.errors.nameUser}</div> : null}
        </div>
        <div className="form">
          <div className="input-form">
            <textarea
              data-test-id="review-text-field"
              id="comment"
              placeholder="Комментарий"
              name="comment"
              rows="14"
              cols="50"
              value={formik.values.comment}
              onChange={formik.handleChange}></textarea>
          </div>
          {formik.errors.comment ? <div className="error">{formik.errors.comment}</div> : null}
        </div>
        {review.isSendReview ? (
          <div className="form-button">
            <button data-test-id="review-submit-button" type="submit" disabled>
              <span class="submit-spinner"></span>Send
            </button>
          </div>
        ) : (
          <div className="form-button">
            <button
              data-test-id="review-submit-button"
              type="submit"
              disabled={!(formik.values.nameUser && formik.values.comment) ? true : false}>
              <span class="submit-spinner submit-spinner-hide"></span>Send
            </button>
          </div>
        )}

        {review.isLoadings ? (
          <div className="form-message-success">{review.textSendReviewSuccess}</div>
        ) : (
          <div className="form-message-error">{review.textSendReviewError}</div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
