import React from 'react';
import { useState } from 'react';
import next from '../Slider/assets/next.svg';
import prev from '../Slider/assets/prev.svg';

import './productfooter.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { ClothesCart } from '../../Clothes/Clothes-cart/ClothesCart';
import { useSelector } from 'react-redux';
export const ProductFooter = ({ productType }) => {
  const { data } = useSelector((state) => state);
  const [swiper, setSwiper] = useState(null);
  const nextBtn = () => swiper.slideNext();
  const prevBtn = () => swiper.slidePrev();
  return (
    <div className="products-footer">
      <div className="products-footer-slider">
        <div className="products-footer-title">
          <span>RELATED PRODUCTS</span>
        </div>
        <div className="relate-btn">
          <img className="relate-prev" src={prev} alt={prev} onClick={prevBtn} />
          <img className="relate-next" src={next} alt={next} onClick={nextBtn} />
        </div>
      </div>
      <div className="relate-prod-image">
        <Swiper
          data-test-id="related-slider"
          breakpoints={{
            590: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            920: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          loop
          modules={[Controller]}
          onSwiper={setSwiper}>
          {data[productType].map((card) => (
            <SwiperSlide style={{ opacity: '1' }}>
              <ClothesCart key={card} card={card} productType={productType} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
