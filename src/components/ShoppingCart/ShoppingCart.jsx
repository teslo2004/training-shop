import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import del from '../ShoppingCart/assets/delete.svg';
import close from '../ShoppingCart/assets/close.svg';
import './shoppingcart.scss';

export const ShoppingCart = ({ id, onClick, clickCart }) => {
  const cart = useSelector((state) => state.shop.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((accumulator, item) => (accumulator += item.num * item.price), 0);

  const onclickDeleteProductToCart = (imageUrl, size) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: { imageUrl, size } });
  };

  const onPlus = (item) => {
    dispatch({ type: 'PLUS_PRODUCT', payload: item });
  };

  const onMinus = (item) => {
    dispatch({ type: 'MINUS_PRODUCT', payload: item });
  };

  const onDeleteProduct = (imageUrl, size) => {
    const obj = {
      id,
      imageUrl,
      size,
    };
    onclickDeleteProductToCart(obj.imageUrl, obj.size);
  };
  return (
    <div
      onClick={onClick}
      className={clickCart ? 'shopping-cart-wrapper' : 'shopping-cart-wrapper hide'}>
      <div className={clickCart ? 'shopping-cart visible' : 'shopping-cart '} data-test-id="cart">
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
          <div className="shopping-cart-container">
            {cart.length > 0 ? (
              cart.map((item, id) => (
                <div key={id} data-test-id="cart-card">
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
                            {item.num > 1 ? (
                              <button onClick={() => onMinus(item)} data-test-id="minus-product">
                                -
                              </button>
                            ) : (
                              <button data-test-id="minus-product">-</button>
                            )}
                            <span>{item.num}</span>
                            <button onClick={() => onPlus(item)} data-test-id="plus-product">
                              +
                            </button>
                          </div>
                          <div className="shopping-cart-price">
                            ${(item.price * item.num).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="shopping-cart-del">
                      <img
                        onClick={() => onDeleteProduct(item.imageUrl, item.size)}
                        src={del}
                        alt="delete"
                        data-test-id="remove-product"
                      />
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
        </div>
        {cart.length > 0 ? (
          <div className="shopping-cart-total-price">
            <span>Total</span>
            {totalPrice.toFixed(2)}$
          </div>
        ) : (
          ''
        )}
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
      <div className={!clickCart ? 'open-cart' : 'open-cart visible'}></div>
    </div>
  );
};
