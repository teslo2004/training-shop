import React from 'react';
import stripe from '../assets/stripe.svg';
import aes from '../assets/aes.svg';
import paypal from '../assets/paypal.svg';
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import discover from '../assets/discover.svg';
import americanExpress from '../assets/american-express.svg';
import './footerpay.scss';

export const FooterPay = () => {
  return (
    <div className="footer-pay">
      <div className="copyright">
        <span>Copyright &copy; 2032 all rights reserved</span>
      </div>
      <div className="pay-img">
        <img src={stripe} alt="stripe" />
        <img src={aes} alt="aes" />
        <img src={paypal} alt="paypal" />
        <img src={visa} alt="visa" />
        <img src={mastercard} alt="mastercard" />
        <img src={discover} alt="discover" />
        <img src={americanExpress} alt="americanExpress" />
      </div>
      <div className="site">
        <a href="#">Clevertec.ru/training</a>
      </div>
    </div>
  );
};
