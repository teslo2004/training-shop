import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import del from '../ShoppingCart/assets/delete.svg';

export const CartItem = ({ handleNext, onClick, totalPrice }) => {
  const cart = useSelector((state) => state.shop.items);

  const {
    phone,
    email,
    countryPickup,
    city,
    street,
    house,
    postcode,
    apartment,
    deliveryMethod,
    storeAddress,
  } = useSelector((state) => state.order.data);

  const dispatch = useDispatch();

  const onclickDeleteProductToCart = (id, size, color) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: { id, size, color } });
  };

  const onPlus = (item) => {
    dispatch({ type: 'PLUS_PRODUCT', payload: item });
  };

  const onMinus = (item) => {
    dispatch({ type: 'MINUS_PRODUCT', payload: item });
  };

  const onDeleteProduct = (id, size, color) => {
    const obj = {
      id,
      size,
      color,
    };
    onclickDeleteProductToCart(obj.id, obj.size, obj.color);
  };

  const handleNextPage = () => {
    dispatch({
      type: 'SEND_ORDER',
      payload: {
        phone,
        email,
        countryPickup,
        city,
        street,
        house,
        postcode,
        apartment,
        deliveryMethod,
        cart,
        storeAddress,
      },
    });
    handleNext();
  };

  return (
    <div className="shopping-cart-main">
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
                    onClick={() => onDeleteProduct(item.id, item.size, item.color)}
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
          <button className="further" onClick={handleNextPage}>
            FURTHER
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
  );
};
