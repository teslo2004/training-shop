const defaultState = {
  countries: [],
  isLoading: false,
  isError: false,
};

const countries = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING_COUNTRY': {
      return { ...state, isLoading: true };
    }
    case 'LOAD_SUCCESS_COUNTRY': {
      return { ...state, countries: action.payload.data, isLoading: false };
    }

    case 'ERROR_LOAD_COUNTRY': {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};

export default countries;
