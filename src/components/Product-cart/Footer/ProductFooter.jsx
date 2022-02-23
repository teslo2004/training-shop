import React from 'react';
import next from '../Slider/assets/next.svg';
import prev from '../Slider/assets/prev.svg';

import { RELATE_PROD } from '../../../data/data-product-relate';
import './productfooter.scss';
import { RelateCart } from './RelateCart/RelateCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

export const ProductFooter = () => {
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
          {RELATE_PROD.map((item) => (
            <SwiperSlide>
              <RelateCart key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
