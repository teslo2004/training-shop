import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CARDS } from '../../data/data-clothes';
import { ProdHead } from '../../components/Product-cart/Header/ProdHead';
import { Slider } from '../../components/Product-cart/Slider/Slider';
import { ProductInfo } from '../../components/Product-cart/Info/ProductInfo';

import './productpage.scss';
import { ProductFooter } from '../../components/Product-cart/Footer/ProductFooter';

export const ProductPage = ({ productType }) => {
  const { id } = useParams();
  const [card, setCard] = useState();
  useEffect(() => {
    setCard(CARDS[productType].find((item) => item?.id === id));
  }, [productType, id]);
  return (
    <div data-test-id={`product-page-${productType}`}>
      <ProdHead productType={productType} name={card?.name} rating={card?.rating} />
      <div className="product-main">
        <Slider />
        <ProductInfo price={card?.price} />
      </div>
      <ProductFooter />
    </div>
  );
};