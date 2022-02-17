import React from 'react';
import './clothes.scss';
import { CARDS } from '../../data/data-clothes';
import { ClothesCart } from './Clothes-cart/ClothesCart';

const Clothes = ({ productType }) => {
  return (
    <div>
      <div className="clothes-container">
        <div className="clothes-header">
          <h2>{productType}'s</h2>
        </div>
        <div className="clothes-menu">
          <a href="#">
            <span>NEW ARRIVALS</span>
          </a>
          <a href="#">
            <span>SPECIALS</span>
          </a>
          <a href="#">
            <span>BESTSELLERS</span>
          </a>
          <a href="#">
            <span>MOST VIEWED</span>
          </a>
          <a href="#">
            <span>FEATURED PRODUCTS</span>
          </a>
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
