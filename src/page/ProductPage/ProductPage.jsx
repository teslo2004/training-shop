import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProdHead } from '../../components/Product-cart/Header/ProdHead';
import { Slider } from '../../components/Product-cart/Slider/Slider';
import { ProductInfo } from '../../components/Product-cart/Info/ProductInfo';

import './productpage.scss';
import { ProductFooter } from '../../components/Product-cart/Footer/ProductFooter';

export const ProductPage = ({ productType }) => {
  const { id } = useParams();
  const [card, setCard] = useState();

  useEffect(() => {
    setCard(PRODUCTS[productType].find((item) => item?.id === id));
  }, [productType, id]);
  return (
    <div data-test-id={`product-page-${productType}`} className="product">
      <ProdHead
        productType={productType}
        name={card?.name}
        rating={card?.rating}
        reviews={card?.reviews}
      />
      <div className="product-main">
        <Slider imagesColor={card?.images} />
        <ProductInfo
          price={card?.price}
          material={card?.material}
          rating={card?.rating}
          sizes={card?.sizes}
          firstSize={card?.sizes[0]}
          firstColor={card?.images[0].color}
          reviewsAll={card?.reviews}
          imagesColor={card?.images}
        />
      </div>
      <ProductFooter productType={productType} />
    </div>
  );
};
