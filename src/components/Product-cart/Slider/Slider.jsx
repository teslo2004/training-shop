import React, { useState } from 'react';
import up from './assets/up.svg';
import down from './assets/down.svg';
import trousers from './assets/trousers.jpg';
import trousers1 from './assets/trousers1.jpg';
import trousers2 from './assets/trousers2.jpg';
import trousers3 from './assets/trousers3.jpg';
import trousers4 from './assets/trousers4.jpg';

import './slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = () => {
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
            onSwiper={setThumbs}
            navigation
            direction={'vertical'}
            modules={[Navigation, Controller, Thumbs]}
            spaceBetween={10}
            slidesPerView={4}>
            <SwiperSlide>
              <img src={trousers1} alt={trousers1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers1} alt={trousers2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers1} alt={trousers3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers1} alt={trousers4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="trousers-big">
        <Swiper
          onSwiper={setSwiper}
          navigation
          modules={[Navigation, Thumbs]}
          spaceBetween={50}
          slidesPerView={1}
          thumbs={{ swiper: thumbs }}>
          <div className="main-img" data-test-id="product-slider">
            <SwiperSlide>
              <img src={trousers} alt={trousers} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers} alt={trousers} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers} alt={trousers} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={trousers} alt={trousers} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
