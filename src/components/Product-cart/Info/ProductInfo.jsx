import React, { useState, useEffect } from 'react';

import hanger from './assets/hanger.svg';
import scales from './assets/scales.svg';
import heart from './assets/heart.svg';
import car from './assets/car.svg';
import mail from './assets/mail.svg';
import arrow from './assets/arrow.svg';
import annotation from './assets/annotation.svg';

import { CHECKOUT } from '../../../data/data-product-pay';
import { Raiting } from '../../Clothes/Raiting/Raiting';
import { Rewiev } from '../Rewiev/Rewiev';

import './productinfo.scss';

export const ProductInfo = ({
  price,
  rating,
  material,
  sizes,
  firstSize,
  reviewsAll,
  imagesColor,
  firstColor,
}) => {
  const [size, setSize] = useState(firstSize);

  let colors = [];
  let images = [];
  imagesColor?.map((item) => {
    if (!colors.includes(item.color)) {
      return colors.push(item.color) && images.push(item);
    }
  });
  const [color, setColor] = useState(firstColor);

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  const changeImage = (e) => {
    setColor(e.target.alt);
  };

  useEffect(() => {
    setSize(firstSize);
  }, [firstSize]);

  useEffect(() => {
    setColor(firstColor);
  }, [firstColor]);

  return (
    <div className="product-info-main">
      <div className="color">
        <span>
          COLOR:<span className="product-bold">{color}</span>
        </span>
      </div>
      <div className="info-image">
        {images?.map((image) => (
          <img
            src={`https://training.cleverland.by/shop${image.url}`}
            alt={image.color}
            className={color === image.color ? 'image-border' : ''}
            onClick={(e) => changeImage(e)}
          />
        ))}
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
              Color:<span className="black">{colors?.join(',')}</span>
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
            <span>{reviewsAll?.length} reviews</span>
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
