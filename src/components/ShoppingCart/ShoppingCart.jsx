import React from 'react';
import { useSelector } from 'react-redux';
import del from '../ShoppingCart/assets/delete.svg';
import close from '../ShoppingCart/assets/close.svg';
import './shoppingcart.scss';

export const ShoppingCart = ({ onClick }) => {
  const cart = useSelector((state) => state.shop.items);

  return (
    <div>
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <div className="shopping-cart-title">
            <h4>SHOPPING CART</h4>
          </div>
          <div onClick={onClick} className="shopping-cart-close ">
            <img src={close} alt="close cart" />
          </div>
        </div>
        <div className="shopping-cart-products">
          <div className="shopping-cart-menu">
            <span className="first">Item in Cart </span>
            <span className="second">/ Delivery Info /</span>
            <span className="third"> Payment</span>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="shopping-cart-container" key={item.id}>
                <div className="shopping-cart-info">
                  <div>
                    <img
                      src={`https://training.cleverland.by/shop${item.imageUrl}`}
                      alt={item.color}
                      className="shopping-cart-image"
                    />
                  </div>
                  <div className="shopping-cart-center">
                    <div>
                      <div className="shopping-cart-name">{item.name}</div>
                      <div className="shopping-cart-color">
                        {item.color},{item.size}
                      </div>
                    </div>
                    <div>
                      <div className="shopping-cart-num-price">
                        <div className="shopping-cart-num">
                          <button>-</button>
                          <input type="text" value="1" />
                          <button>+</button>
                        </div>
                        <div className="shopping-cart-price">${item.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="shopping-cart-del">
                    <img src={del} alt="delete" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="shopping-cart-warning">
              Sorry,
              <br />
              your cart
              <br />
              is empty
            </div>
          )}
        </div>
        {cart.length > 0 ? (
          <div className="shopping-cart-btn">
            <button className="further">FURTHER</button>
            <button className="view-cart" onClick={onClick}>
              VIEW CART
            </button>
          </div>
        ) : (
          <div className="shopping-cart-btn">
            <button className="back" onClick={onClick}>
              BACK TO SHOPPING
            </button>
          </div>
        )}
      </div>
      <div className={onClick ? 'open-cart' : ''}></div>
    </div>
  );
};
