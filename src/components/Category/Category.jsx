import React from 'react';
import './category.scss';
import banner from '../Category/assets/banner.jpg';
import women from '../Category/assets/women.jpg';
import men from '../Category/assets/men.jpg';
import accessories from '../Category/assets/accessories.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Category() {
  return (
    <div className="category">
      <div className="banner">
        <div className="slider" data-test-id="main-slider">
          <Swiper navigation modules={[Navigation]} spaceBetween={50} slidesPerView={1}>
            <SwiperSlide style={{ opacity: '1' }}>
              <div className="banner-slider">
                <img src={banner} alt="banner" className="banner-img" />
                <div className="banner-info">
                  <span>banner</span>
                  <p>your title text</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ opacity: '1' }}>
              <div className="banner-slider">
                <img src={banner} alt="banner" className="banner-img" />
                <div className="banner-info">
                  <span>banner</span>
                  <p>your title text</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ opacity: '1' }}>
              <div className="banner-slider">
                <img src={banner} alt="banner" className="banner-img" />
                <div className="banner-info">
                  <span>banner</span>
                  <p>your title text</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
            <img src={accessories} alt="accessories" />
            <span>accessories</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
