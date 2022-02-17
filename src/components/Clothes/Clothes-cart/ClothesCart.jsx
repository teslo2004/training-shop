import React from 'react';
import { Raiting } from '../Raiting/Raiting';
import './clothesCart.scss';

export const ClothesCart = ({ image, name, price, raiting, sale }) => {
  return (
    <div>
      <div className="clothes-img">
        <img src={image} alt="image" />
      </div>
      <div className="clothes-name">{name}</div>
      <div className="clothes-footer">
        <div className="clothes-price">$ {price} </div>
        <span className="clothes-sale">{sale && '$ ' + (100 / parseFloat(sale)) * price}</span>
        <div className="clothes-raiting">
          <Raiting raiting={raiting} />
        </div>
      </div>
    </div>
  );
};
