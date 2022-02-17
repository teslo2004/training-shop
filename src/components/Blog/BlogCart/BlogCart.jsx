import React from 'react';
import './blogcart.scss';

export const BlogCart = ({ image, title, description }) => {
  return (
    <div className="blog-cart">
      <div className="blog-cart-img">
        <img src={image} />
      </div>
      <div className="blog-cart-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
