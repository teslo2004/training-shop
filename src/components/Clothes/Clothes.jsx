import React, { useState } from 'react';
import './clothes.scss';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../data/data-clothes-block';
import { ClothesCart } from './Clothes-cart/ClothesCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Clothes = ({ productType }) => {
  const { data } = useSelector((state) => state);
  const [arrivals, setArrivals] = useState('isNewArrivals');

  const changeParticular = (e) => {
    setArrivals(e.target.value);
  };
  return (
    <div className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes-container">
        <div className="clothes-header">
          <h2>{productType}'s</h2>
        </div>
        <div className="clothes-menu">
          {MAIN_CLOTHES_BLOCK_MENU.map((item) => (
            <Link to="#">
              <button
                data-test-id={`clothes-${productType}-${item.particularName}`}
                type="text"
                value={item.particularName}
                onClick={(e) => changeParticular(e)}
                className={item.particularName === arrivals ? 'clothes-menu-active' : ''}>
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="clothes-cart">
        {data[productType]
          ?.filter((card) => card.particulars[arrivals])
          .map((card) => (
            <ClothesCart key={card.id} card={card} productType={productType} />
          ))}
      </div>
      <div className="all-btn">
        <Link to={`/${productType}`}>
          <button type="button">see all</button>
        </Link>
      </div>
    </div>
  );
};

export default Clothes;
