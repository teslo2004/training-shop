import React, { useState } from 'react';
import pinterest from '../assets/pinterest.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import './footersocial.scss';
import { useDispatch, useSelector } from 'react-redux';

export const FooterSocial = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state);
  //console.log(email);

  const [mail, setMail] = useState('');
  let [isCorrect, setIsCorrect] = useState(false);

  const handleSendEmail = () => {
    dispatch({ type: 'SEND_EMAIL' });
    setMail('');
    setIsCorrect(false);
  };

  const handlerMail = (e) => {
    setMail(e.target.value);
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if (!regExp.test(String(mail).toLowerCase())) {
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
  };

  return (
    <div>
      {email.isSuccessEmail ? (
        <span style={{ color: '#008000' }}>{email.mailSendResponse}</span>
      ) : (
        <span style={{ color: '#FF0000' }}>{email.mailSendResponse}</span>
      )}
      <div className="social">
        <div className="social-text">
          <h2>BE IN TOUCH WITH US:</h2>
        </div>
        <div className="social-mail">
          <div className="social-input">
            <input
              data-test-id="footer-mail-field"
              onChange={(e) => handlerMail(e)}
              name="email"
              type="text"
              value={mail}
              placeholder="Enter your email..."
            />
          </div>
          <div className="social-btn">
            {email.isMailSendLoading ? (
              <button
                data-test-id="footer-subscribe-mail-button"
                type="submit"
                onClick={handleSendEmail}
                disabled={!isCorrect}>
                <span className="submit-spinner submit-spinner_hide"></span> join us
              </button>
            ) : (
              <button
                data-test-id="footer-subscribe-mail-button"
                type="submit"
                onClick={handleSendEmail}
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
