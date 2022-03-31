const defaultState = {
  products: {
    men: [],
    women: [],
  },
  isLoading: false,
  isError: false,
};

const data = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING_DATA': {
      return { ...state, isLoading: true };
    }
    case 'LOAD_SUCCESS_DATA': {
      return { ...state, ...state.products, ...action.payload, isLoading: false };
    }

    case 'ERROR_LOAD_DATA': {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};

export default data;
