import React from 'react';
import './newscart.scss';

export const NewsCart = ({ title, image, description }) => {
  return (
    <div className="news-cart">
      <img src={image} alt={image} />
      <div className="news-box">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};
