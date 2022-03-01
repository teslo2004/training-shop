import React from 'react';
import { Link } from 'react-router-dom';
import { Raiting } from '../../Clothes/Raiting/Raiting';
import './prodhead.scss';

import share from '../../Product/Header/assets/share.svg';

export const ProdHead = ({ productType, name, rating, reviews }) => {
  return (
    <div className="product-header">
      <div className="product-header-nav">
        <div className="product-header-nav-path">
          <Link to="/">
            <span className="home">Home</span>
          </Link>
          &#9658;
          <Link to={`/${productType}`}>
            <span className="page">
              {productType.substring(0, 1).toUpperCase() + productType.substring(1)}
            </span>
          </Link>
          &#9658;
          <span>
            <strong>{name}</strong>
          </span>
        </div>
        <div className="product-header-share">
          <img src={share} alt="share" />
          <span>share</span>
        </div>
      </div>
      <div className="product-name">
        <span>{name}</span>
      </div>
      <div className="statistic">
        <div className="raiting">
          <Raiting raiting={rating} />
          <span className="reviews">{reviews?.length} Reviews</span>
        </div>

        <div className="counter">
          <span className="sku">
            SKU: <span className="bold">777</span>
          </span>
          <span className="availability">
            Availability: <span className="bold">In Stock</span>
          </span>
        </div>
      </div>
    </div>
  );
};
