import React from 'react';
import { NewsCart } from './NewsCart/NewsCart';
import { NEWS } from '../../data/data-news';
import './news.scss';

export const News = () => {
  return (
    <div className="news">
      {NEWS.map((item) => (
        <NewsCart
          key={item.id}
          image={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
