import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cart from '../Header/assets/cart.svg';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

import './cart.scss';

export const Cart = () => {
  const [clickCart, setClickCart] = useState(false);

  const clickShoppingCart = () => {
    setClickCart(!clickCart);
    !clickCart
      ? (document.querySelector('body').style.overflow = 'hidden')
      : (document.querySelector('body').style.overflow = 'visible');
  };

  const { totalCount } = useSelector(({ shop }) => shop);

  return (
    <div>
      <div className="cart" data-test-id="cart-button" onClick={clickShoppingCart}>
        <img src={cart} alt={cart} className="cart-image" />
        <div className={totalCount > 0 ? 'cart-num-add' : 'cart-num-add hide'}>{totalCount}</div>
      </div>
      {clickCart ? <ShoppingCart onClick={clickShoppingCart} /> : null}
    </div>
  );
};
