import React from 'react';
import { Link } from 'react-router-dom';
import './productheader.scss';
import share from './assets/share.svg';

export const ProductHeader = ({ productType }) => {
  return (
    <div className="product-header">
      <div className="product-header-nav">
        <div className="product-header-nav-path">
          <Link to="/">
            <span className="home">Home</span>
          </Link>
          &#9658;
          <span className="page">
            {productType.substring(0, 1).toUpperCase() + productType.substring(1)}
          </span>
        </div>
        <div className="product-header-share">
          <img src={share} alt="share" />
          <span>share</span>
        </div>
      </div>
      <div className="product-name">
        <span>{productType.toUpperCase()}</span>
      </div>
    </div>
  );
};
