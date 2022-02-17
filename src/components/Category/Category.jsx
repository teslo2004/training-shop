import React from 'react';
import './category.scss';
import banner from '../Category/assets/banner.jpg';
import women from '../Category/assets/women.jpg';
import men from '../Category/assets/men.jpg';
import accessories from '../Category/assets/accessories.jpg';
import prev from '../Category/assets/prev.svg';
import next from '../Category/assets/next.svg';

function Category() {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="banner-list">
          <img className="prev-btn" src={prev} alt="prev" />
          <div className="banner-info">
            <span>banner</span>
            <p>your title text</p>
          </div>
          <img className="next-btn" src={next} alt="next" />
        </div>
        <div className="category-list">
          <div className="women-img">
            <img src={women} alt="women" />
            <span>women</span>
          </div>
          <div className="men-img">
            <img src={men} alt="men" />
            <span>men</span>
          </div>
          <div className="accessories-img">
            <span>accessories</span>
            <img src={accessories} alt="accessories" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
