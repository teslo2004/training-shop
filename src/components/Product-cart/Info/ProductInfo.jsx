import React, { useState, useEffect } from 'react';
import info1 from './assets/info1.jpg';
import info2 from './assets/info2.jpg';
import info3 from './assets/info3.jpg';
import info4 from './assets/info4.jpg';
import hanger from './assets/hanger.svg';
import scales from './assets/scales.svg';
import heart from './assets/heart.svg';
import car from './assets/car.svg';
import mail from './assets/mail.svg';
import arrow from './assets/arrow.svg';
import annotation from './assets/annotation.svg';

import { CHECKOUT } from '../../../data/data-product-pay';
import { REVIEW } from '../../../data/data-review';
import { Raiting } from '../../Clothes/Raiting/Raiting';
import { Rewiev } from '../Rewiev/Rewiev';

import './productinfo.scss';

export const ProductInfo = ({ price, rating, material, reviews, sizes, firstSize, reviewsAll }) => {
  const [size, setSize] = useState(firstSize);

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    setSize(firstSize);
  }, [firstSize]);
  return (
    <div className="product-info-main">
      <div className="color">
        <span>
          COLOR:<span className="product-bold">Blue</span>
        </span>
      </div>
      <div className="info-image">
        <img src={info1} alt={info1} />
        <img src={info2} alt={info2} />
        <img src={info3} alt={info3} />
        <img src={info4} alt={info4} />
      </div>
      <div className="size">
        <span>
          SIZE:<span className="product-bold">{size}</span>
        </span>
      </div>
      <div className="size-btn">
        {sizes?.map((item) => (
          <button
            value={item}
            className={item === size ? 'size-btn-active' : ''}
            onClick={(e) => changeSize(e)}>
            {item}
          </button>
        ))}
      </div>
      <div className="hanger">
        <img src={hanger} alt={hanger} />
        <span>Size guide</span>
      </div>
      <div className="product-card">
        <span>${price}</span>
        <button>ADD TO CARD</button>
        <img src={heart} alt={heart} />
        <img src={scales} alt={scales} />
      </div>
      <div className="benefit">
        <div className="car">
          <img src={car} alt={car} />
          <span>Shipping & Delivery</span>
        </div>
        <div className="arrow">
          <img src={arrow} alt={arrow} />
          <span>Returns & Exchanges</span>
        </div>
        <div className="mail">
          <img src={mail} alt={mail} />
          <span>Ask a question</span>
        </div>
      </div>
      <div className="guarant">
        <span className="guarant-title">
          GUARANTEED SAFE CHECKOUT <hr />
        </span>
        <div className="checkout-img">
          {CHECKOUT.map(({ id, imageSrc, imgTitle }) => (
            <img key={id} src={imageSrc} alt={imgTitle} />
          ))}
        </div>
      </div>
      <div className="description">
        <div className="title">DESCRIPTION</div>
        <div className="text">
          <div className="text-title">ADDITIONAL INFORMATION</div>
          <div className="specifications">
            <div className="text-color">
              Color:<span className="black"> Blue, White, Black, Grey</span>
            </div>
            <div className="text-size">
              Size:<span className="black">{sizes?.join(',')}</span>
            </div>
            <div className="text-material">
              Material:<span className="black">{material}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="review-header">
          <span>REVIEWS</span>
        </div>
        <div className="raiting-raview">
          <div className="raiting-star">
            <div className="review-raiting">
              <Raiting raiting={rating} />
            </div>
            <span>{reviews?.length} reviews</span>
          </div>
          <div className="raiting-write">
            <img src={annotation} alt={annotation} />
            <span>Write a review</span>
          </div>
        </div>
        {reviewsAll?.map((item) => (
          <Rewiev key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
