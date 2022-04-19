const initialState = {
  data: {
    products: [{ name: '', size: '', color: '', quanity: '' }],
    deliveryMethod: 'Pickup from post offices',
    paymentMethod: 'Visa',
    totalPrice: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    postcode: '',
    storeAddress: '',
    card: '',
    cardDate: '',
    cardCVV: '',
  },
  error: '',
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_ORDER': {
      return {
        ...state,
        ...(state.data.deliveryMethod = action.payload.deliveryMethod),
        ...(state.data.phone = action.payload.phone),
        ...(state.data.email = action.payload.email),
        ...(state.data.country = action.payload.countryPickup),
        ...(state.data.city = action.payload.city),
        ...(state.data.street = action.payload.street),
        ...(state.data.house = action.payload.house),
        ...(state.data.apartment = action.payload.apartment),
        ...(state.data.postcode = action.payload.postcode),
      };
    }

    case 'SEND_PAY': {
      return {
        ...state,
        ...(state.data.cardDate = action.payload.cardDate),
        ...(state.data.cardCVV = action.payload.cvv),
        ...(state.data.card = action.payload.cardNum),
      };
    }

    case 'LOAD_ERROR_ORDER': {
      return {
        ...state,
        error: action.payload,
      };
    }

    case 'LOAD_SUCCESS_ORDER': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'RESET_ORDER': {
      return {
        ...state,
        ...(state.data.deliveryMethod = action.payload),
        ...(state.data.phone = action.payload),
        ...(state.data.email = action.payload),
        ...(state.data.country = action.payload),
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
