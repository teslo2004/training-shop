import React from 'react';
import { Link } from 'react-router-dom';
import { Raiting } from '../Raiting/Raiting';
import './clothesCart.scss';

export const ClothesCart = ({ card: { img, name, price, raiting, sale, id, productType } }) => {
  return (
    <Link to={`/${productType}/${id}`} data-test-id={`clothes-card-${productType}`}>
      <div className="clothes-img">
        <img src={img} alt={img} />
      </div>
      <div className="clothes-name">{name}</div>
      <div className="clothes-footer">
        <div className="clothes-price">$ {price} </div>
        <span className="clothes-sale">{sale && '$ ' + (100 / parseFloat(sale)) * price}</span>
        <div className="clothes-raiting">
          <Raiting raiting={raiting} />
        </div>
      </div>
    </Link>
  );
};
