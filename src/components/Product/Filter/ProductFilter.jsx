import React, { useState, useEffect } from 'react';
import line from './assets/line.svg';
import circle from './assets/circle.svg';
import instruments from './assets/instruments.svg';
import close from './assets/close.svg';

import './filter.scss';
import { PRODUCTS } from '../../../data/products';
import { ClothesCart } from '../../Clothes/Clothes-cart/ClothesCart';

export const ProductFilter = ({ products, productType }) => {
  const [filterBtn, setFilterBtn] = useState(false);

  const [checkColor, setCheckColor] = useState([]);
  const [checkSize, setCheckSize] = useState([]);
  const [checkBrand, setCheckBrand] = useState([]);
  const [checkPrice, setCheckPrice] = useState([]);
  let [filterProd, setFilterProd] = useState(products);

  const clickFilterBtn = () => {
    setFilterBtn(!filterBtn);
  };

  const colorsFilter = [];
  products?.forEach((el) => {
    for (let i = 0; i < el.images.length; i++) {
      if (!colorsFilter.includes(el.images[i].color)) {
        colorsFilter.push(el.images[i].color);
      }
    }
  });

  const brands = [...new Set(products?.map((item) => item.brand))];

  const sizeFilter = [];
  products?.forEach((el) => {
    for (let i = 0; i < el.sizes.length; i++) {
      if (!sizeFilter.includes(el.sizes[i])) {
        sizeFilter.push(el.sizes[i]);
      }
    }
  });

  function changeItem(item, value) {
    switch (item.name) {
      case 'color':
        item.checked
          ? setCheckColor([...checkColor, value])
          : setCheckColor(checkColor.filter((color) => color !== value));
        break;
      case 'size':
        item.checked
          ? setCheckSize([...checkSize, value])
          : setCheckSize(checkSize.filter((size) => size !== value));
        break;
      case 'brand':
        item.checked
          ? setCheckBrand([...checkBrand, value])
          : setCheckBrand(checkBrand.filter((brand) => brand !== value));
        break;
      case 'price':
        item.checked
          ? setCheckPrice([...checkPrice, value])
          : setCheckPrice(checkPrice.filter((price) => price !== value));
        break;
      default:
        console.log('Nothing marked');
    }
  }

  useEffect(() => {
    setFilterProd(() => {
      let filterProd = [...PRODUCTS[productType]];

      function priceNum(products) {
        return checkPrice.some((item) => {
          let arrNum = item.split('-').map((item) => parseInt(item));
          if (arrNum[1]) {
            return products.price <= arrNum[1] && products.price >= arrNum[0];
          } else {
            return products.price >= arrNum[0];
          }
        });
      }

      const filterItem = (filterProd) => {
        if (
          checkColor.length !== 0 &&
          !filterProd.images.some((image) => checkColor.includes(image.color))
        ) {
          return false;
        }
        if (checkSize.length !== 0 && !filterProd.sizes.some((size) => checkSize.includes(size))) {
          return false;
        }
        if (checkBrand.length !== 0 && !checkBrand.includes(filterProd.brand)) {
          return false;
        }
        if (checkPrice.length !== 0 && !priceNum(filterProd)) {
          return false;
        }
        return true;
      };
      return [...filterProd].filter(filterItem);
    });
  }, [checkBrand, checkColor, checkSize, checkPrice, productType]);

  useEffect(() => {
    let check = document.querySelectorAll('input:checked');
    for (let i = 0; i < check.length; i++) {
      check[i].checked = false;
    }
    setFilterBtn(false);
    setCheckSize([]);
    setCheckColor([]);
    setCheckBrand([]);
    setCheckPrice([]);
  }, [productType]);
  return (
    <div>
      <div className="filter">
        <div className="filter-left" data-test-id="filter-button">
          <img
            src={!filterBtn ? instruments : close}
            alt={instruments}
            onClick={() => clickFilterBtn()}
          />
          <span>FILTERS</span>
        </div>
        <div className="filter-right">
          <img src={line} alt={line} />
          <img src={circle} alt={circle} />
        </div>
      </div>
      <div
        data-test-id={`filters-${productType}`}
        className={filterBtn ? 'filter-list active' : 'filter-list'}>
        <div className="filter-option">
          <h4>COLOR</h4>
          <ul className={colorsFilter.length > 6 ? 'hidden' : ''} data-test-id="filters-color">
            {colorsFilter.map((color) => (
              <li key={color}>
                <label>
                  <input
                    data-test-id={`filter-color-${color}`}
                    type="checkbox"
                    value={color}
                    name="color"
                    onChange={(e) => changeItem(e.target, `${color}`)}
                  />
                  <span>{color}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-option">
          <h4>SIZE</h4>
          <ul className={sizeFilter.length > 6 ? 'hidden' : ''} data-test-id="filters-size">
            {sizeFilter.map((size) => (
              <li key={size}>
                <label>
                  <input
                    data-test-id={`filter-size-${size}`}
                    type="checkbox"
                    name="size"
                    value={size}
                    onChange={(e) => changeItem(e.target, `${size}`)}
                  />
                  <span>{size}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-option">
          <h4>BRAND</h4>
          <ul className={brands.length > 6 ? 'hidden' : ''} data-test-id="filters-brand">
            {brands.map((brand) => (
              <li key={brand}>
                <label>
                  <input
                    data-test-id={`filter-brand-${brand}`}
                    type="checkbox"
                    name="brand"
                    value={brand}
                    onChange={(e) => changeItem(e.target, `${brand}`)}
                  />
                  <span>{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-option">
          <h4>PRICE</h4>
          <ul>
            <li key={'0'}>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="0 100"
                  onChange={(e) => changeItem(e.target, `0$ - 100$`)}
                />
                <span>$0 - $100</span>
              </label>
            </li>

            <li key={'1'}>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="100 200"
                  onChange={(e) => changeItem(e.target, `100$ - 200$`)}
                />
                <span>$100 - $200</span>
              </label>
            </li>
            <li key={'2'}>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="200 300"
                  onChange={(e) => changeItem(e.target, `200$ - 300$`)}
                />
                <span>$200 - $300</span>
              </label>
            </li>
            <li key={'3'}>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="300 1000"
                  onChange={(e) => changeItem(e.target, `300$ - 1000$`)}
                />
                <span>$300 - $1000</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="color-item">
        <span>
          {filterProd?.length < PRODUCTS[productType].length
            ? `${filterProd?.length} items found `
            : ''}
        </span>
        {checkColor.map((item) => (
          <span>Color: {item} </span>
        ))}
        {checkSize.map((item) => (
          <span>Size: {item} </span>
        ))}
        {checkBrand.map((item) => (
          <span>Brand: {item} </span>
        ))}
        {checkPrice.map((item) => (
          <span>Price: {item} </span>
        ))}
      </div>
      <div className="clothes-cart">
        {products &&
          filterProd.map((card) => (
            <ClothesCart key={card.id} card={card} productType={productType} />
          ))}
      </div>
    </div>
  );
};
