import React from 'react';
import './benefits.scss';
import car from '../Benefits/assets/car.svg';
import arrow from '../Benefits/assets/arrow.svg';
import support from '../Benefits/assets/support.svg';

function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits-item">
        <img className="benefits-item-img" src={car} alt="shipping" />
        <div className="benefits-item-cart">
          <div className="benefits-item-title">FREE SHIPPING</div>
          <div className="benefits-item-text">On all UA order or order above $100</div>
        </div>
      </div>
      <div className="benefits-item">
        <img className="benefits-item-img" src={arrow} alt="guarantee" />
        <div className="benefits-item-cart">
          <div className="benefits-item-title">30 DAYS RETURN</div>
          <div className="benefits-item-text">Simply return it within 30 days for an exchange</div>
        </div>
      </div>
      <div className="benefits-item">
        <img className="benefits-item-img" src={support} alt="support" />
        <div className="benefits-item-cart">
          <div className="benefits-item-title">SUPPORT 24/7</div>
          <div className="benefits-item-text">Contact us 24 hours a day, 7 days a week</div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
