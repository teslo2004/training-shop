const initialState = {
  data: {
    phone: '',
    email: '',
    countryPickup: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    postcode: '',
  },
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_ORDER': {
      console.log(action.payload);
      return {
        ...state,
        ...(state.data.phone = action.payload.phone),
        ...(state.data.email = action.payload.email),
        ...(state.data.countryPickup = action.payload.countryPickup),
        ...(state.data.city = action.payload.city),
        ...(state.data.street = action.payload.street),
        ...(state.data.house = action.payload.house),
        ...(state.data.apartment = action.payload.apartment),
        ...(state.data.postcode = action.payload.postcode),
      };
    }
    case 'RESET_ORDER': {
      return {
        ...state,
        ...(state.data.phone = action.payload),
        ...(state.data.email = action.payload),
        ...(state.data.countryPickup = action.payload),
        ...(state.data.city = action.payload),
        ...(state.data.street = action.payload),
        ...(state.data.house = action.payload),
        ...(state.data.apartment = action.payload),
        ...(state.data.postcode = action.payload),
      };
    }

    default:
      return state;
  }
};

export default order;
