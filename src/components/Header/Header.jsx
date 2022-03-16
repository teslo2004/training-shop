import React, { useState } from 'react';
import { MENU } from '../../data/data-menu';
import './header.scss';
import logo from '../Header/assets/logo.svg';
import search from '../Header/assets/search.svg';
import globe from '../Header/assets/globe.svg';
import user from '../Header/assets/user.svg';

import tel from '../Header/assets/tel.svg';
import location from '../Header/assets/location1.svg';
import time from '../Header/assets/time.svg';
import pinterest from '../Footer/assets/pinterest.svg';
import facebook from '../Footer/assets/facebook.svg';
import insta from '../Footer/assets/insta.svg';
import twitter from '../Footer/assets/twitter.svg';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="header" data-test-id="header">
      <div className="header-bar">
        <div className="phone">
          <img src={tel} alt="tel" />
          <span>+375 29 100 20 30</span>
        </div>
        <div className="location">
          <img src={location} alt="location" />
          <span>Belarus, Gomel, Lange 17</span>
        </div>
        <div className="time">
          <img src={time} alt="time" />
          <span>All week 24/7</span>
        </div>
        <div className="header-social">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="insta" />
          <img src={pinterest} alt="pinterest" />
        </div>
      </div>
      <nav>
        <div className="logo" onClick={() => setMenuActive(false)}>
          <Link to="/" className="header-nav-logo" data-test-id="header-logo-link">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className={menuActive ? 'menu active' : 'menu'}
          onClick={() => setMenuActive(false)}
          data-test-id="burger-menu">
          {MENU.map((item) => (
            <Link
              key={item.id}
              to={`/${item.path}`}
              onClick={() => setMenuActive(false)}
              className="menu-item"
              data-test-id={`menu-link-${item.path}`}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="user-menu">
          <img className="user-menu-image" src={search} alt="search" />
          <img className="user-menu-image" src={globe} alt="globe" />
          <img className="user-menu-image" src={user} alt="user" />
          <Cart />
          <div
            className={menuActive ? 'burger-btn close' : 'burger-btn'}
            data-test-id="burger-menu-btn"
            onClick={() => setMenuActive(!menuActive)}>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
