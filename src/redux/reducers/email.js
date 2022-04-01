const defaultState = {
  isMailSendLoading: false,
  isSuccessEmail: false,
  isErrorEmail: false,
  mailSendResponse: '',
  placeOfSend: '',
};

const email = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEND_EMAIL': {
      return {
        ...state,
        isMailSendLoading: true,
        placeOfSend: action.payload,
      };
    }
    case 'SEND_SUCCESS_EMAIL': {
      console.log(state);
      return {
        ...state,
        ...action.payload,
        isMailSendLoading: false,
        isSuccessEmail: true,
        mailSendResponse: 'Почта отправлена успешно',
        placeOfSend: state.placeOfSend,
      };
    }

    case 'SEND_ERROR_EMAIL': {
      return {
        ...state,
        ...action.payload,
        isMailSendLoading: false,
        isSuccessEmail: false,
        isErrorEmail: true,
        mailSendResponse: 'Ошибка отправки почты',
        placeOfSend: state.placeOfSend,
      };
    }

    default:
      return state;
  }
};

export default email;
