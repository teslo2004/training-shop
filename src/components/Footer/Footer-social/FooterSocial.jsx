import React from 'react';
import pinterest from '../assets/pinterest.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import './footersocial.scss';

export const FooterSocial = () => {
  return (
    <div className="social">
      <div className="social-text">
        <h2>BE IN TOUCH WITH US:</h2>
      </div>
      <div className="social-mail">
        <div className="social-input">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="social-btn">
          <button>join us</button>
        </div>
      </div>
      <div className="social-icon">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={insta} alt="insta" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </div>
  );
};
