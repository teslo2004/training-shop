import React from 'react';
import { MENU } from '../../data/data-menu';
import './header.scss';
import logo from '../Header/assets/logo.svg';
import search from '../Header/assets/search.svg';
import globe from '../Header/assets/globe.svg';
import user from '../Header/assets/user.svg';
import bag from '../Header/assets/bag.svg';
import tel from '../Header/assets/tel.svg';
import location from '../Header/assets/location1.svg';
import time from '../Header/assets/time.svg';
import pinterest from '../Footer/assets/pinterest.svg';
import facebook from '../Footer/assets/facebook.svg';
import insta from '../Footer/assets/insta.svg';
import twitter from '../Footer/assets/twitter.svg';
import { Link } from 'react-router-dom';

function Header() {
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
        <div className="logo">
          <Link to="/" className="header-nav-logo" data-test-id="header-logo-link">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu" data-test-id="menu">
          {MENU.map((item) => (
            <Link
              key={item.id}
              to={`/${item.path}`}
              className="menu-item"
              data-test-id={`menu-link-${item.path}`}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="user-menu">
          <img src={search} alt="search" />
          <img src={globe} alt="globe" />
          <img src={user} alt="user" />
          <img src={bag} alt="bag" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
