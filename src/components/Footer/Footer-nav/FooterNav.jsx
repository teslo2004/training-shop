import React from 'react';
import './footernav.scss';
import { FOOTER_NAV } from '../../../data/data-footer-nav';
import location from '../../Header/assets/location.svg';
import tel from '../../Header/assets/tel.svg';
import clock from '../../Header/assets/clock.svg';
import mail from '../../Header/assets/mail.svg';
import { Link } from 'react-router-dom';

export const FooterNav = () => {
  return (
    <div className="footer-nav">
      <div className="footer-item">
        {FOOTER_NAV.map(({ id, navItem, links }) => (
          <div key={id}>
            <h2>{navItem}</h2>
            <ul>
              {links.map(({ href, title }, index) => (
                <li key={index}>
                  <Link to={`/${href}`} data-test-id={`footer-nav-link-${href}`}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="contact">
        <h2>CONTACT US</h2>
        <ul>
          <a href="#">
            <img src={location} alt="location" />
            <span>Belarus, Gomel, Lange 17</span>
          </a>
          <a href="#">
            <img src={tel} alt="tel" />
            <span>+375 29 100 20 30</span>
          </a>
          <a href="#">
            <img src={clock} alt="clock" />
            <span>All week 24/7</span>
          </a>
          <a href="#">
            <img src={mail} alt="mail" />
            <span>info@clevertec.ru</span>
          </a>
        </ul>
      </div>
    </div>
  );
};
