import React from 'react';
import { Raiting } from '../../Clothes/Raiting/Raiting';
import './rewiev.scss';

export const Rewiev = ({ item: { author, text, raiting } }) => {
  return (
    <div className="rewiev-cart">
      <div className="title">
        <div className="name">{author}</div>
        <div className="rating">
          <Raiting raiting={raiting} />
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
