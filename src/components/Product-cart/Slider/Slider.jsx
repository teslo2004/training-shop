import React, { useState } from 'react';
import up from './assets/up.svg';
import down from './assets/down.svg';

import './slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ imagesColor }) => {
  const [thumbs, setThumbs] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const nextBtn = () => swiper.slideNext();
  const prevBtn = () => swiper.slidePrev();

  return (
    <div className="troussers">
      <div className="trousers-little">
        <div className="trousers-next">
          <img src={up} alt={up} className="prev-button" onClick={prevBtn} />
          <img src={down} alt={down} className="next-button" onClick={nextBtn} />
        </div>

        <div className="trousers-img">
          <Swiper
            navigation={false}
            className="swiper-img"
            onSwiper={setThumbs}
            direction={'vertical'}
            modules={[Navigation, Controller, Thumbs]}
            spaceBetween={0}
            slidesPerView={4}>
            {imagesColor?.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={`https://training.cleverland.by/shop${item.url}`} alt={item.color} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="trousers-big">
        <Swiper
          data-test-id="product-slider"
          onSwiper={setSwiper}
          navigation={true}
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          thumbs={{ swiper: thumbs }}>
          <div>
            {imagesColor?.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={`https://training.cleverland.by/shop${item.url}`}
                  alt={item.color}
                  className="main-img"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
