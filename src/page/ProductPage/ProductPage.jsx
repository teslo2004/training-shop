import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProdHead } from '../../components/Product-cart/Header/ProdHead';
import { Slider } from '../../components/Product-cart/Slider/Slider';
import { ProductInfo } from '../../components/Product-cart/Info/ProductInfo';

import './productpage.scss';
import { ProductFooter } from '../../components/Product-cart/Footer/ProductFooter';
import { useDispatch, useSelector } from 'react-redux';

export const ProductPage = ({ productType }) => {
  const { id } = useParams();
  const [card, setCard] = useState();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    setCard(data[productType]?.find((item) => item?.id === id));
  }, [productType, id, data]);

  const onclickAddProductToCart = (obj) => {
    dispatch({ type: 'ADD_PRODUCT', payload: obj });
  };

  const onclickDeleteProductToCart = (id, size, color) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: { id, size, color } });
  };

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
          id={card?.id}
          name={card?.name}
          price={card?.price}
          material={card?.material}
          rating={card?.rating}
          sizes={card?.sizes}
          firstSize={card?.sizes[0]}
          firstColor={card?.images[0].color}
          reviewsAll={card?.reviews}
          imagesColor={card?.images}
          onClickAddProduct={onclickAddProductToCart}
          onclickDeleteProduct={onclickDeleteProductToCart}
        />
      </div>
      <ProductFooter productType={productType} />
    </div>
  );
};
