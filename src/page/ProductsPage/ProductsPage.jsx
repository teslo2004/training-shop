import React from 'react';
import { ClothesCart } from '../../components/Clothes/Clothes-cart/ClothesCart';
import { ProductFilter } from '../../components/Product/Filter/ProductFilter';
import { ProductHeader } from '../../components/Product/Header/ProductHeader';
import { CARDS } from '../../data/data-clothes';
import './productspage.scss';

export const ProductsPage = ({ productType }) => {
  return (
    <div>
      <ProductHeader productType={productType} />
      <ProductFilter />
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
      </div>
    </div>
  );
};
