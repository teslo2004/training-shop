import React, { useState } from 'react';
import { useFormik } from 'formik';
import './payment.scss';

import paypal from './assets/paypal.svg';
import visa from './assets/visa.svg';
import mastercard from './assets/mastercard.svg';
import eyeClose from './assets/EyeClose.svg';
import eyeOpen from './assets/EyeOpen.svg';
import { useDispatch, useSelector } from 'react-redux';

export const Payment = ({ totalPrice, handlePrev, handleNext }) => {
  const { paymentMethod, email, card, cardCVV, cardDate } = useSelector(
    (state) => state.order.data,
  );
  const order = useSelector((state) => state.order.data);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('Visa');
  const [dateLen, setDateLen] = useState(0);
  const [cvv, setCvv] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  const initialValues = {
    paymentMethod: paymentMethod,
    emailPay: '' || email,
    cardNum: '' || card,
    cvv: '' || cardCVV,
    cardDate: '' || cardDate,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.emailPay) {
      errors.emailPay = 'Поле должно быть заполнено';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.emailPay)) {
      errors.emailPay = 'Некорректный email';
    }
    if (values.cardNum.length < 16) {
      errors.cardNum = 'Проверьте правильность введенных данных';
    }
    if (values.cvv.length < 3) {
      errors.cvv = 'Поле не заполнено';
    }

    return errors;
  };

  const handleDate = (e) => {
    e.target.value = e.target.value.trim().replace(/[A-Za-zА-Яа-яЁё]/, '');
    const dateVal = e.target.value.split('/');
    const [last] = [...dateVal].reverse();
    const [first] = [...dateVal];
    const yearNow = new Date().getFullYear().toString().substr(-2);
    const monthNow = new Date().getMonth() + 1;
    if (e.target.value.length === 5 && yearNow >= last && monthNow > first) {
      e.target.value = '';
    } else if (e.target.value.length === 5 && yearNow > last) {
      e.target.value = '';
    } else if (e.target.value.length === 2 && e.target.value <= 12) {
      e.target.value += '/';
    } else if (e.target.value.length === 2 && e.target.value >= 12) {
      e.target.value = '';
    }
    setDateLen(e.target.value);
  };
  const formik = useFormik({
    initialValues,
    validate,
  });

  const handleData = () => {
    dispatch({ type: 'SEND_PAY', payload: formik.values });
    handleNext();
  };

  return (
    <form>
      <div className="payment-info-main">
        <div className="payment-info">
          <div className="payment-info-title">
            <h4>Method of payments:</h4>
          </div>

          <div className="payment-info-choose">
            <div className="payment-info-method">
              <input
                id="4"
                type="radio"
                name="payment"
                value="PayPal"
                checked={checked === 'PayPal' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="4">
                <img src={paypal} alt="PayPal" />
              </label>
            </div>
            <hr />
            <div className="payment-info-method">
              <input
                id="5"
                type="radio"
                name="payment"
                value="Visa"
                checked={checked === 'Visa' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="5">
                <img src={visa} alt="Visa" />
              </label>
            </div>
            <hr />
            <div className="payment-info-method">
              <input
                id="6"
                type="radio"
                name="payment"
                value="Master"
                checked={checked === 'Master' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="6">
                <img src={mastercard} alt="Master" />
              </label>
            </div>
            <hr />
            <div className="payment-info-method">
              <input
                id="7"
                type="radio"
                name="payment"
                value="Cash"
                checked={checked === 'Cash' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="7">Cash</label>
            </div>
            <hr />
          </div>
          <div className="payment-info-contacts">
            {checked === 'PayPal' ? (
              <div>
                <span>E-MAIL</span>
                <input
                  type="email"
                  name="emailPay"
                  placeholder="e-mail"
                  value={formik.values.emailPay}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="payment-errors">
                  {formik.errors.emailPay ? (
                    <div className="errors">{formik.errors.emailPay}</div>
                  ) : null}
                </div>
              </div>
            ) : (
              ''
            )}

            {checked === 'Visa' || checked === 'Master' ? (
              <div>
                <div>
                  <span>CARD</span>
                  <input
                    type="text"
                    maxLength="16"
                    name="cardNum"
                    placeholder="---- ----- ---- ----"
                    value={formik.values.cardNum.trim().replace(/[A-Za-zА-Яа-яЁё]/, '')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className="payment-errors">
                    {formik.errors.cardNum ? (
                      <div className="errors-card">{formik.errors.cardNum}</div>
                    ) : null}
                  </div>
                </div>

                <div className="payment-info-date">
                  <div>
                    <input
                      type="text"
                      maxLength="5"
                      name="cardDate"
                      placeholder="MM/YY"
                      value={formik.values.cardDate}
                      onChange={(e) => {
                        handleDate(e);
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <div className="payment-errors">
                      {dateLen.length < 5 ? <div className="errors">Введите дату</div> : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type={cvv ? 'text' : 'password'}
                      maxLength="4"
                      name="cvv"
                      value={formik.values.cvv.trim().replace(/[A-Za-zА-Яа-яЁё]/, '')}
                      onChange={formik.handleChange}
                      placeholder="CVV"
                      onBlur={formik.handleBlur}
                    />
                    <div className="payment-errors">
                      {formik.errors.cvv ? <div className="errors">{formik.errors.cvv}</div> : null}
                    </div>
                    <img
                      className="payment-close"
                      src={cvv ? eyeOpen : eyeClose}
                      alt="eye"
                      onClick={() => setCvv(!cvv)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div>
          <div className="payment-info-total-price">
            <span>Total</span>
            {totalPrice.toFixed(2)}$
          </div>
        </div>
        <div className="payment-cart-btn">
          <button type="button" className="further" onClick={handleData}>
            {checked !== 'Cash' ? 'CHECK OUT' : 'READY'}
          </button>
          <button type="button" className="view-cart" onClick={handlePrev}>
            VIEW CART
          </button>
        </div>
      </div>
    </form>
  );
};
