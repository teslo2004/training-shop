import React, { useEffect, useState } from 'react';
import pinterest from '../assets/pinterest.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import './footersocial.scss';
import { useDispatch, useSelector } from 'react-redux';

export const FooterSocial = () => {
  const dispatch = useDispatch();
  const { isSuccessEmail, mailSendResponse, isMailSendLoading, placeOfSend, isErrorEmail } =
    useSelector((state) => state.email);
  //console.log(email);

  const [mailFooter, setMailFooter] = useState('');
  let [isCorrect, setIsCorrect] = useState(false);

  const handleSendEmailFooter = () => {
    dispatch({ type: 'SEND_EMAIL', payload: 'footerEmail' });

    setIsCorrect(false);
  };

  const handlerMailFooter = (e) => {
    setMailFooter(e.target.value);
    const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/;
    if (!regExp.test(String(mailFooter).toLowerCase())) {
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
  };

  useEffect(() => {
    if (isSuccessEmail) {
      setMailFooter('');
    }
  }, [dispatch, isSuccessEmail, placeOfSend]);
  return (
    <div>
      {placeOfSend === 'footerEmail' && isSuccessEmail && (
        <span style={{ color: '#008000' }}>{mailSendResponse}</span>
      )}
      {placeOfSend === 'footerEmail' && isErrorEmail && (
        <span style={{ color: 'red' }}>{mailSendResponse}</span>
      )}
      <div className="social">
        <div className="social-text">
          <h2>BE IN TOUCH WITH US:</h2>
        </div>
        <div className="social-mail">
          <div className="social-input">
            <input
              data-test-id="footer-mail-field"
              onChange={(e) => handlerMailFooter(e)}
              name="email"
              type="text"
              value={mailFooter}
              placeholder="Enter your email..."
            />
          </div>
          <div className="social-btn">
            {isMailSendLoading ? (
              <button
                data-test-id="footer-subscribe-mail-button"
                name="footer"
                type="submit"
                onClick={() => handleSendEmailFooter()}
                disabled={!isCorrect}>
                <span className="submit-spinner submit-spinner_hide"></span> join us
              </button>
            ) : (
              <button
                data-test-id="footer-subscribe-mail-button"
                name="footer"
                type="submit"
                onClick={() => handleSendEmailFooter()}
                disabled={!isCorrect}>
                join us
              </button>
            )}
          </div>
        </div>
        <div className="social-icon">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="insta" />
          <img src={pinterest} alt="pinterest" />
        </div>
      </div>
    </div>
  );
};
