import React, { useState } from 'react';
import line from './assets/line.svg';
import circle from './assets/circle.svg';
import instruments from './assets/instruments.svg';
import close from './assets/close.svg';

import './filter.scss';

export const ProductFilter = ({ products }) => {
  const [filterBtn, setFilterBtn] = useState(false);

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
          <ul>
            {colorsFilter.map((color) => (
              <li key={color}>
                <label>
                  <input type="checkbox" value={color} />
                  <span>{color}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-option">
          <h4>SIZE</h4>
          <ul>
            {sizeFilter.map((size) => (
              <li key={size}>
                <label>
                  <input type="checkbox" value={size} />
                  <span>{size}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-option">
          <h4>BRAND</h4>
          <ul>
            {brands.map((brand) => (
              <li key={brand}>
                <label>
                  <input type="checkbox" value={brand} />
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
                <input type="checkbox" />
                <span>$0 - $50</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>$50 - $100</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>$100 - $200</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>$200 - $300</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>$300 - $1000</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
