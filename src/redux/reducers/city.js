const defaultState = {
  cities: {
    city: '',
    country: '',
  },
  allCity: [],
  isLoading: false,
  isError: false,
};

const city = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING_CITY': {
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    }
    case 'LOAD_SUCCESS_CITY': {
      const cityArr = action.payload.map((item) => item.city);
      return { ...state, allCity: cityArr };
    }

    case 'LOAD_ERROR_CITY': {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};

export default city;
