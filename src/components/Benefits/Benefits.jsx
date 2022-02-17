import React from 'react';
import './benefits.scss';
import car from '../Benefits/assets/car.svg';
import arrow from '../Benefits/assets/arrow.svg';
import support from '../Benefits/assets/support.svg';

function Benefits() {
  return (
    <div className="benefits">
      <div className="shipping">
        <img src={car} alt="shipping" />
        <h5>FREE SHIPPING</h5>
        <span>On all UA order or order above $100</span>
      </div>
      <div className="guarantee">
        <img src={arrow} alt="guarantee" />
        <h5>30 DAYS RETURN</h5>
        <span>Simply return it within 30 days for an exchange</span>
      </div>
      <div className="support">
        <img src={support} alt="support" />
        <h5>SUPPORT 24/7</h5>
        <span>Contact us 24 hours a day, 7 days a week</span>
      </div>
    </div>
  );
}

export default Benefits;
