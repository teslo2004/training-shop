import React from 'react';
import { ClothesCart } from '../../components/Clothes/Clothes-cart/ClothesCart';
import { ProductFilter } from '../../components/Product/Filter/ProductFilter';
import { ProductHeader } from '../../components/Product/Header/ProductHeader';
import { CARDS } from '../../data/data-clothes';
import './productspage.scss';

export const ProductsPage = ({ productType }) => {
  return (
    <div className="products-page" data-test-id={`products-page-${productType}`}>
      <ProductHeader productType={productType} />
      <ProductFilter />
      <div className="clothes-cart">
        {CARDS[productType].map((card) => (
          <ClothesCart key={card.id} card={card} productType={productType} />
        ))}
      </div>
    </div>
  );
};