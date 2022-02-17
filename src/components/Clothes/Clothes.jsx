import React from 'react';
import './clothes.scss';
import { CARDS } from '../../data/data-clothes';
import { ClothesCart } from './Clothes-cart/ClothesCart';
import { Link } from 'react-router-dom';

const Clothes = ({ productType }) => {
  return (
    <div className="clothes" data-test-id={`clothes-${productType}`}>
      <div className="clothes-container">
        <div className="clothes-header">
          <h2>{productType}'s</h2>
        </div>
        <div className="clothes-menu">
          <Link to="#">
            <span>NEW ARRIVALS</span>
          </Link>
          <Link to="#">
            <span>SPECIALS</span>
          </Link>
          <Link to="#">
            <span>BESTSELLERS</span>
          </Link>
          <Link to="#">
            <span>MOST VIEWED</span>
          </Link>
          <Link to="#">
            <span>FEATURED PRODUCTS</span>
          </Link>
        </div>
      </div>
      <div className="clothes-cart">
        {CARDS[productType].map((card) => (
          <ClothesCart
            key={card.id}
            image={card.img}
            name={card.name}
            price={card.price}
            sale={card.sale}
            raiting={card.raiting}
            productType={productType}
          />
        ))}
        <div className="all-btn">
          <button>see all</button>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
