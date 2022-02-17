import React from 'react';
import line from './assets/line.svg';
import circle from './assets/circle.svg';
import instruments from './assets/instruments.svg';

import './filter.scss';

export const ProductFilter = () => {
  return (
    <div className="filter">
      <div className="filter-left">
        <img src={instruments} alt={instruments} />
        <span>FILTERS </span>
      </div>
      <div className="filter-right">
        <img src={line} alt={line} />
        <img src={circle} alt={circle} />
      </div>
    </div>
  );
};
