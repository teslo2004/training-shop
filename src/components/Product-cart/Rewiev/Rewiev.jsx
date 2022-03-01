import React from 'react';
import { Raiting } from '../../Clothes/Raiting/Raiting';
import './rewiev.scss';

export const Rewiev = ({ item: { name, text, rating } }) => {
  return (
    <div className="rewiev-cart">
      <div className="title">
        <div className="name">{name}</div>
        <div className="rating">
          <Raiting raiting={rating} />
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
