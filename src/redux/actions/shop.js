export const addProduct = (productObj) => ({
  type: 'ADD_PRODUCT',
  payload: productObj,
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});
