const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const shop = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      //console.log(action.payload);
      return {
        ...state,
        ...state.items.push(action.payload),
        totalCount: state.items.length,
      };
    }

    case 'REMOVE_CART_ITEM': {
      //console.log(action.payload);
      const items = state.items.filter((item) => item.id !== action.payload);
      console.log(items);
      return {
        ...state,
        items,

        totalCount: items.length,
      };
    }
    default:
      return state;
  }
};

export default shop;
