import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Raiting } from '../Clothes/Raiting/Raiting';
import './review-form.scss';

import starY from '../../components/Clothes/Raiting/assets/yellow-star.svg';
import starG from '../../components/Clothes/Raiting/assets/grey-star.svg';

const ReviewForm = () => {
  const [star, setStar] = useState(1);
  //const arr = [starY, starG, starG,starG,starG]
  const handleChangeStar = (e) => {
    setStar(e.target.alt);
  };

  const formik = useFormik({
    initialValues: {
      nameUser: '',
      comment: '',
    },
    onSubmit: (values) => {
      console.log();
    },
    validate: (values) => {
      let error = {};
      if (!values.nameUser) {
        error.nameUser = 'Введите имя';
      }
      if (!values.comment) {
        error.comment = 'Введите отзыв';
      }

      return error;
    },
  });
  return (
    <div className="review-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-title">
          <h2>Write a review</h2>
        </div>
        <div className="form-raiting">
          <Raiting raiting={star} onClickStar={handleChangeStar} />
        </div>
        <div className="form">
          <div className="input-form">
            <input
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
        <div className="form-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
