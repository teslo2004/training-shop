import React from 'react';
import starY from './assets/yellow-star.svg';
import starG from './assets/grey-star.svg';

const maxRaiting = 5;
export const Raiting = ({ raiting }) => {
  const arr = Array.from(Array(maxRaiting).keys());
  return (
    <div>
      {arr.map((star, id) => (
        <img key={id} src={star < raiting ? starY : starG} alt={star} />
      ))}
    </div>
  );
};
