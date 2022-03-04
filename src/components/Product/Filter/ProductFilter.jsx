import React, { useState } from 'react';
import line from './assets/line.svg';
import circle from './assets/circle.svg';
import instruments from './assets/instruments.svg';
import close from './assets/close.svg';

import './filter.scss';

export const ProductFilter = ({ products }) => {
  const [filterBtn, setFilterBtn] = useState(false);

  const [checkColor, setCheckColor] = useState([]);
  const [checkSize, setCheckSize] = useState([]);
  const [checkBrand, setCheckBrand] = useState([]);
  const [checkPrice, setCheckPrice] = useState([]);

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
  console.log(checkPrice);
  return (
    <div>
      <div className="filter">
        <div className="filter-left">
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
      <div className={filterBtn ? 'filter-list active' : 'filter-list'}>
        <div className="filter-option">
          <h4>COLOR</h4>
          <ul className={colorsFilter.length > 6 ? 'hidden' : ''}>
            {colorsFilter.map((color) => (
              <li key={color}>
                <label>
                  <input
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
          <ul className={sizeFilter.length > 6 ? 'hidden' : ''}>
            {sizeFilter.map((size) => (
              <li key={size}>
                <label>
                  <input
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
          <ul className={brands.length > 6 ? 'hidden' : ''}>
            {brands.map((brand) => (
              <li key={brand}>
                <label>
                  <input
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
            <li>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="0 50"
                  onChange={(e) => changeItem(e.target, `"$0 - $50"`)}
                />
                <span>$0 - $50</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="50 100"
                  onChange={(e) => changeItem(e.target, `$50 - $100`)}
                />
                <span>$50 - $100</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="100 200"
                  onChange={(e) => changeItem(e.target, `$100 - $200`)}
                />
                <span>$100 - $200</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="200 300"
                  onChange={(e) => changeItem(e.target, `$200 - $300`)}
                />
                <span>$200 - $300</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value="300 1000"
                  onChange={(e) => changeItem(e.target, `$300 - $1000`)}
                />
                <span>$300 - $1000</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
