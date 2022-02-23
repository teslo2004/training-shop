import React from 'react';
import { Raiting } from '../../../Clothes/Raiting/Raiting';
import './relatecart.scss';

export const RelateCart = ({ item: { img, name, price, sale, raiting } }) => {
  return (
    <div className="relate-cart">
      <div className="relate-cart-img">
        <img src={img} alt={img} />
      </div>
      <div className="relate-cart-text">
        <div className="relate-cart-name">{name}</div>
        <div className="relate-cart-price">
          <div>
            ${price} <span className="sale">{sale && '$ ' + (100 / parseFloat(sale)) * price}</span>
          </div>
          <div>
            <Raiting raiting={raiting} />
          </div>
        </div>
      </div>
    </div>
  );
};
