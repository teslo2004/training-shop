import React from 'react';
import next from '../Slider/assets/next.svg';
import prev from '../Slider/assets/prev.svg';

import { RELATE_PROD } from '../../../data/data-product-relate';
import './productfooter.scss';
import { RelateCart } from './RelateCart/RelateCart';

export const ProductFooter = () => {
  return (
    <div className="products-footer">
      <div className="products-footer-slider">
        <div className="products-footer-title">
          <span>RELATED PRODUCTS</span>
        </div>
        <div className="relate-btn">
          <img className="relate-prev" src={prev} alt={prev} />
          <img className="relate-next" src={next} alt={next} />
        </div>
      </div>
      <div className="relate-prod-image">
        {RELATE_PROD.map((item) => (
          <RelateCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
