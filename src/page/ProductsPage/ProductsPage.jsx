import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductFilter } from '../../components/Product/Filter/ProductFilter';
import { ProductHeader } from '../../components/Product/Header/ProductHeader';
import './productspage.scss';

export const ProductsPage = ({ productType, filterProd }) => {
  const [products, setProducts] = useState();
  const { data } = useSelector((state) => state);
  useEffect(() => {
    setProducts(data[productType]);
  }, [data, productType]);

  return (
    <div className="products-page" data-test-id={`products-page-${productType}`}>
      <ProductHeader productType={productType} />
      <ProductFilter productType={productType} products={products} />
    </div>
  );
};
