import React from 'react';
import first from './assets/daco.png';
import second from './assets/paco.png';
import './subscribe.scss';

function Subscribe() {
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
        <input type="email" placeholder="Enter your email" />
        <button>subscribe</button>
      </div>
      <div className="second-image">
        <img src={second} alt="men" />
      </div>
    </div>
  );
}

export default Subscribe;
