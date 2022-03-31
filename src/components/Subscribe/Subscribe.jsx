import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import first from './assets/daco.png';
import second from './assets/paco.png';
import './subscribe.scss';

const Subscribe = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state);

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
    <div className="subscribe">
      <div className="first-image">
        <img src={first} alt="women" />
      </div>
      <div className="subscribe-info">
        <h2>Special Offer</h2>
        <p>
          Subscribe
          <br /> And <span>Get 10% Off</span>
        </p>
        <input
          data-test-id="main-subscribe-mail-field"
          onChange={(e) => handlerMail(e)}
          name="email"
          type="text"
          value={mail}
          placeholder="Enter your email..."
        />
        {email.isSuccessEmail ? (
          <span style={{ color: '#008000' }}>{email.mailSendResponse}</span>
        ) : (
          <span style={{ color: '#FF0000' }}>{email.mailSendResponse}</span>
        )}
        {email.isMailSendLoading ? (
          <button
            data-test-id="main-subscribe-mail-button"
            type="submit"
            onClick={handleSendEmail}
            disabled={!isCorrect}>
            <span class="submit-spinner submit-spinner_hide"></span> subscribe
          </button>
        ) : (
          <button
            data-test-id="main-subscribe-mail-button"
            type="submit"
            onClick={handleSendEmail}
            disabled={!isCorrect}>
            subscribe
          </button>
        )}
      </div>
      <div className="second-image">
        <img src={second} alt="men" />
      </div>
    </div>
  );
};

export default Subscribe;
