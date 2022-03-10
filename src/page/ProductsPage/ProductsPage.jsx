import React, { useEffect, useState } from 'react';
import { ProductFilter } from '../../components/Product/Filter/ProductFilter';
import { ProductHeader } from '../../components/Product/Header/ProductHeader';
import { PRODUCTS } from '../../data/products';
import './productspage.scss';

export const ProductsPage = ({ productType, filterProd }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(PRODUCTS[productType]);
  }, [productType]);
  return (
    <div className="products-page" data-test-id={`products-page-${productType}`}>
      <ProductHeader productType={productType} />
      <ProductFilter productType={productType} products={products} />
    </div>
  );
};
