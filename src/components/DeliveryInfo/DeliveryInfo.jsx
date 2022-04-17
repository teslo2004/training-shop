import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './../ShoppingCart/shoppingcart.scss';
import './deliveryInfo.scss';
import { useDispatch, useSelector } from 'react-redux';

export const DeliveryInfo = ({ handleNext, handlePrev, totalPrice }) => {
  const { phone, email, countryPickup, city, street, house, apartment, postcode } = useSelector(
    (state) => state.order.data,
  );

  const [checked, setChecked] = useState('Pickup from post offices');
  const [agree, setAgree] = useState(false);
  const [countryName, setCountryName] = useState('Country');
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);
  const { allCity } = useSelector((state) => state.city);

  const handleSetAgree = () => {
    setAgree(!agree);
  };

  const handleAgree = () => {
    setAgree(false);
    formik.handleSubmit();
  };

  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  const initialValues = {
    phone: '' || phone,
    email: '' || email,
    country: '' || countryPickup,
    city: '' || city,
    street: '' || street,
    house: '' || house,
    apartment: '' || apartment,
    postcode: '' || postcode,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.phone) {
      errors.phone = 'Поле должно быть заполнено';
    } else if (!/(\+375 \(25|29|33|44)\)(\s|)[0-9]{7}/.test(values.phone)) {
      errors.phone = 'Некорректный телефон';
    }

    if (!values.email) {
      errors.email = 'Поле должно быть заполнено';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
      errors.email = 'Некорректный email';
    }

    return errors;
  };

  const validationSchema = Yup.object({
    country: Yup.string().required('Поле должно быть заполнено'),
    city: Yup.string().required('Поле должно быть заполнено'),
    street: Yup.string().required('Поле должно быть заполнено'),
    house: Yup.string().required('Поле должно быть заполнено'),
    postcode: Yup.string().required('Поле должно быть заполнено'),
  });

  const formik = useFormik({
    initialValues,
    validate,
    validationSchema,
  });

  const handleBlurPhone = (e) => {
    if (e.target.value === '') {
      e.target.value = '+375 (';
    }
  };

  const handleBlurPostCode = (e) => {
    if (e.target.value === '') {
      e.target.value = 'BY ';
    }
  };

  const handleLoadCountry = () => {
    dispatch({ type: 'LOADING_COUNTRY' });
  };

  const handleCityName = (e) => {
    setCityName(e.target.value);
  };
  useEffect(() => {
    if (cityName && cityName.length > 2) {
      dispatch({ type: 'LOADING_CITY', payload: { countryName, cityName } });
    }
  }, [countryName, cityName, dispatch]);

  const handleSaveData = () => {
    dispatch({ type: 'SEND_ORDER', payload: formik.values });
    handlePrev();
  };
  return (
    <form className="delivery-form">
      <div className="delivery-info-main">
        <div className="delivery-info">
          <div className="delivery-info-title">
            <h4>Choose the method of delivery of the items:</h4>
          </div>

          <div className="delivery-info-choose">
            <div className="delivery-info-method">
              <input
                id="1"
                type="radio"
                name="delivery"
                value="Pickup from post offices"
                checked={checked === 'Pickup from post offices' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="1">Pickup from post offices</label>
            </div>
            <hr />
            <div className="delivery-info-method">
              <input
                id="2"
                type="radio"
                name="delivery"
                value="Express delivery"
                checked={checked === 'Express delivery' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="2">Express delivery</label>
            </div>
            <hr />
            <div className="delivery-info-method">
              <input
                id="3"
                type="radio"
                name="delivery"
                value="Store pickup"
                checked={checked === 'Store pickup' ? true : false}
                onChange={handleChange}
              />
              <label htmlFor="3">Store pickup</label>
            </div>
            <hr />
          </div>
          <div className="delivery-info-contacts">
            <div>
              <span>PHONE</span>
              <input
                type="tel"
                name="phone"
                placeholder="+375 (_ _) _ _ _ _ _ _ _"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onFocus={(e) => handleBlurPhone(e)}
                onBlur={formik.handleBlur}
              />
              <div className="delivery-errors">
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="errors">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
            <div>
              <span>E-MAIL</span>
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="delivery-errors">
                {formik.errors.email && formik.touched.email ? (
                  <div className="errors">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            {checked === 'Pickup from post offices' || checked === 'Express delivery' ? (
              <span>ADDRESS</span>
            ) : (
              <span>ADDRESS OF STORE</span>
            )}
            {checked === 'Pickup from post offices' || checked === 'Express delivery' ? (
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="delivery-errors">
                  {formik.errors.country && formik.touched.country ? (
                    <div className="errors">{formik.errors.country}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="delivery-errors">
                  {formik.errors.city && formik.touched.city ? (
                    <div className="errors">{formik.errors.city}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  name="street"
                  placeholder="street"
                  value={formik.values.street}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <div className="delivery-errors">
                  {formik.errors.street && formik.touched.street ? (
                    <div className="errors">{formik.errors.street}</div>
                  ) : null}
                </div>
                <div className="delivery-info-house">
                  <div>
                    <input
                      type="text"
                      name="house"
                      placeholder="house"
                      value={formik.values.house}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="delivery-errors">
                      {formik.errors.house && formik.touched.house ? (
                        <div className="errors">{formik.errors.house}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="apartment"
                      value={formik.values.apartment}
                      onChange={formik.handleChange}
                      placeholder="Apartment"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <select
                  onClick={handleLoadCountry}
                  onChange={(e) => setCountryName(e.target.value)}
                  className={
                    countryName === 'Country'
                      ? 'delivery-select-country color'
                      : 'delivery-select-country'
                  }>
                  <option selected disabled hidden>
                    {countryName}
                  </option>
                  {country.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
                <input
                  type="text"
                  list="cities"
                  placeholder="Store address"
                  value={cityName}
                  disabled={countryName !== 'Country' ? false : true}
                  onChange={(e) => handleCityName(e)}
                  onBlur={formik.handleBlur}
                />
                <datalist id="cities">
                  {allCity.map((city) => (
                    <option>{city}</option>
                  ))}
                </datalist>
              </div>
            )}
            {checked === 'Pickup from post offices' ? (
              <div>
                <span>POSTCODE</span>
                <input
                  type="text"
                  name="postcode"
                  maxLength={9}
                  placeholder="BY _ _ _ _ _ _"
                  value={formik.values.postcode?.trim()}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={(e) => handleBlurPostCode(e)}
                />
                <div className="delivery-errors">
                  {formik.errors.postcode && formik.touched.postcode ? (
                    <div className="errors">{formik.errors.postcode}</div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div className="delivery-info-agree">
              <input type="checkbox" name="agreeBtn" onChange={handleSetAgree} checked={agree} />
              <span>I agree to the processing of my personal information</span>
            </div>
            <div className="delivery-errors">
              <div className="errors-agree">
                {!agree ? 'Вы должны согласиться на обработку личной информации' : ''}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="delivery-info-total-price">
            <span>Total</span>
            {totalPrice.toFixed(2)}$
          </div>
        </div>
        <div className="delivery-cart-btn">
          <button
            type="button"
            className="further"
            onClick={
              agree &&
              Object.entries(formik.values.email).length !== 0 &&
              Object.entries(formik.values.phone).length !== 0 &&
              ((Object.entries(formik.errors).length === 0 &&
                checked === 'Pickup from post offices') ||
                (checked === 'Express delivery' &&
                  Object.entries(formik.values.country).length !== 0 &&
                  Object.entries(formik.values.city).length !== 0 &&
                  Object.entries(formik.values.street).length !== 0 &&
                  Object.entries(formik.values.house).length !== 0) ||
                (checked === 'Store pickup' && countryName.length !== 0 && cityName.length !== 0))
                ? handleNext
                : handleAgree
            }>
            FURTHER
          </button>
          <button type="button" className="view-cart" onClick={handleSaveData}>
            VIEW CART
          </button>
        </div>
      </div>
    </form>
  );
};
