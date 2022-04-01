import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import first from './assets/daco.png';
import second from './assets/paco.png';
import './subscribe.scss';

const Subscribe = () => {
  const dispatch = useDispatch();
  const { isSuccessEmail, mailSendResponse, isMailSendLoading, placeOfSend, isErrorEmail } =
    useSelector((state) => state.email);

  const [mail, setMail] = useState('');
  let [isCorrect, setIsCorrect] = useState(false);

  const handleSendEmail = () => {
    dispatch({ type: 'SEND_EMAIL', payload: 'subscribe' });
    setMail('');
    setIsCorrect(false);
  };

  const handlerMail = (e) => {
    setMail(e.target.value);
    const regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/;
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
        {placeOfSend === 'subscribe' && isSuccessEmail && (
          <span style={{ color: '#008000' }}>{mailSendResponse}</span>
        )}
        {placeOfSend === 'subscribe' && isErrorEmail && (
          <span style={{ color: 'red' }}>{mailSendResponse}</span>
        )}
        {isMailSendLoading ? (
          <button
            data-test-id="main-subscribe-mail-button"
            type="submit"
            name="subscribe"
            onClick={handleSendEmail}
            disabled={!isCorrect}>
            <span className="submit-spinner submit-spinner_hide"></span> subscribe
          </button>
        ) : (
          <button
            data-test-id="main-subscribe-mail-button"
            type="submit"
            name="subscribe"
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
