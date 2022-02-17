import React from 'react';
import { FooterNav } from './Footer-nav/FooterNav';
import { FooterPay } from './Footer-pay/FooterPay';
import { FooterSocial } from './Footer-social/FooterSocial';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer" data-test-id="footer">
      <div>
        <FooterSocial />
      </div>
      <div>
        <FooterNav />
      </div>
      <div>
        <FooterPay />
      </div>
    </div>
  );
};
