import React from 'react';
import up from './assets/up.svg';
import down from './assets/down.svg';
import trousers from './assets/trousers.jpg';
import trousers1 from './assets/trousers1.jpg';
import trousers2 from './assets/trousers2.jpg';
import trousers3 from './assets/trousers3.jpg';
import trousers4 from './assets/trousers4.jpg';
import prev from './assets/prev.svg';
import next from './assets/next.svg';
import './slider.scss';

export const Slider = () => {
  return (
    <div className="troussers">
      <div className="trousers-little">
        <div className="trousers-next">
          <img src={up} alt={up} />
          <img src={down} alt={down} />
        </div>
        <div className="trousers-img">
          <img src={trousers1} alt={trousers1} />
          <img src={trousers2} alt={trousers2} />
          <img src={trousers3} alt={trousers3} />
          <img src={trousers4} alt={trousers4} />
        </div>
      </div>
      <div className="trousers-big">
        <img className="prev" src={prev} alt={prev} />
        <div className="main-img">
          <img src={trousers} alt={trousers} />
        </div>
        <img className="next" src={next} alt={next} />
      </div>
    </div>
  );
};
