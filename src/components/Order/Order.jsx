import React from 'react';
import { useSelector } from 'react-redux';
import './order.scss';

export const Order = ({ onClick, handlePrev, handleFirstPage }) => {
  const { error } = useSelector((state) => state.order);
  console.log(error);
  return (
    <div>
      {!error ? (
        <div>
          <div className="order-cart-warning">
            Thank you for your order
            <br />
            Information about your order will appear in your e-mail.
            <br />
            Our manager will call you back.
          </div>
          <div className="order-cart-btn">
            <button className="back" onClick={onClick}>
              BACK TO SHOPPING
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="order-cart-warning">
            Sorry, your payment has not been processed.
            <br />
            {error}
          </div>
          <div className="order-cart-btn ">
            <button type="button" className="further" onClick={handlePrev}>
              BACK TO PAYMENT
            </button>
            <button type="button" className="view-cart" onClick={handleFirstPage}>
              VIEW CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
