const initialState = {
  items: [],
  totalCount: 0,
};

const shop = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      //console.log(state.items);
      return {
        ...state,
        ...state.items.push(action.payload),
        totalCount: state.items.length,
      };
    }

    case 'REMOVE_CART_ITEM': {
      //console.log(action.payload);
      const items = state.items.filter(
        (item) =>
          !(
            item.imageUrl === action.payload.imageUrl &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          ),
      );

      return {
        ...state,
        items,
        totalCount: items.length,
      };
    }

    case 'PLUS_PRODUCT': {
      //console.log(action.payload);
      const plus = state.items.map((item) =>
        item === action.payload ? (item.num = item.num + 1) : item.num,
      );

      return {
        ...state,
        plus,
      };
    }

    case 'MINUS_PRODUCT': {
      //console.log(action.payload);
      const minus = state.items.map((item) =>
        item === action.payload ? (item.num = item.num - 1) : item.num,
      );

      return {
        ...state,
        minus,
      };
    }

    default:
      return state;
  }
};

export default shop;
