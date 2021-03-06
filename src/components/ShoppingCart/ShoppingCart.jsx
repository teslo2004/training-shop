import React, { useState } from 'react';
import close from '../ShoppingCart/assets/close.svg';
import './shoppingcart.scss';
import { DeliveryInfo } from '../DeliveryInfo/DeliveryInfo';
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Payment } from '../Payment/Payment';
import { Order } from '../Order/Order';

export const ShoppingCart = ({ onClick, clickCart }) => {
  const cart = useSelector((state) => state.shop.items);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((accumulator, item) => (accumulator += item.num * item.price), 0);
  const [activePage, setActivePage] = useState(0);
  const handleNextPage = (activePage) => {
    switch (activePage) {
      case 0:
        return <CartItem totalPrice={totalPrice} handleNext={handleNext} onClick={onClick} />;
      case 1:
        return (
          <DeliveryInfo totalPrice={totalPrice} handleNext={handleNext} handlePrev={handlePrev} />
        );
      case 2:
        return <Payment totalPrice={totalPrice} handlePrev={handlePrev} handleNext={handleNext} />;
      case 3:
        return (
          <Order handlePrev={handlePrev} onClick={onClick} handleFirstPage={handleFirstPage} />
        );
      default:
        return null;
    }
  };
  const handleNext = () => {
    setActivePage((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActivePage((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActivePage(0);
    onClick();
    dispatch({ type: 'RESET_ORDER' });
  };

  const handleFirstPage = () => {
    setActivePage(0);
    dispatch({ type: 'RESET_ORDER' });
  };

  //const steps = [<CartItem />, <DeliveryInfo />, <Payment />];

  return (
    <div className={clickCart ? 'shopping-cart-wrapper' : 'shopping-cart-wrapper hide'}>
      <div className={clickCart ? 'shopping-cart visible' : 'shopping-cart '} data-test-id="cart">
        <div className="shopping-cart-header">
          <div className="shopping-cart-title">
            <h4>SHOPPING CART</h4>
          </div>
          <div onClick={handleReset} className="shopping-cart-close ">
            <img src={close} alt="close cart" />
          </div>
        </div>
        {activePage < 3 ? (
          <div className="shopping-cart-products">
            <div className="shopping-cart-menu">
              <span className={activePage === 0 ? 'first' : 'second'}>Item in Cart /</span>
              <span className={activePage === 1 ? 'first' : 'second'}> Delivery Info /</span>
              <span className={activePage === 2 ? 'first' : 'second'}> Payment</span>
            </div>
          </div>
        ) : (
          ''
        )}

        {handleNextPage(activePage)}
      </div>
      <div className={!clickCart ? 'open-cart' : 'open-cart visible'} onClick={onClick}></div>
    </div>
  );
};
