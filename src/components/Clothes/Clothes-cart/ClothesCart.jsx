import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Raiting } from '../Raiting/Raiting';
import './clothesCart.scss';

export const ClothesCart = ({
  card: { images, name, price, rating, discount, id },
  productType,
}) => {
  const [imagesCard, setImages] = useState([]);
  const [sizeCard, setSize] = useState([]);
  useEffect(() => {
    setImages(imagesCard);
    setSize(sizeCard);
  }, [imagesCard, sizeCard]);
  return (
    <div className="clothes-carts">
      <Link to={`/${productType}/${id}`} data-test-id={`clothes-card-${productType}`}>
        <div className="clothes-img">
          <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt={name} />
          <div className={discount !== null ? 'discount' : ''}>{discount}</div>
        </div>
        <div className="clothes-name">{name}</div>
        <div className="clothes-footer">
          <div className="clothes-price">$ {price} </div>
          <span className="clothes-sale">
            {discount && '$ ' + ((100 / (100 + parseFloat(discount))) * price).toFixed(2)}
          </span>
          <div className="clothes-raiting">
            <Raiting raiting={rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};
