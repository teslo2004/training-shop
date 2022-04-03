const defaultState = {
  isMailSendLoading: false,
  isSuccessEmail: false,
  isErrorEmail: false,
  mailSendResponse: '',
  placeOfSend: '',
  isUpdates: false,
};

const email = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEND_EMAIL': {
      return {
        ...state,
        isUpdates: false,
        isSuccessEmail: false,
        isMailSendLoading: true,
        placeOfSend: action.payload,
      };
    }
    case 'SEND_SUCCESS_EMAIL': {
      return {
        ...state,
        isMailSendLoading: false,
        isSuccessEmail: true,
        isErrorEmail: false,
        mailSendResponse: 'Почта отправлена успешно',
        placeOfSend: state.placeOfSend,
        isUpdates: false,
      };
    }
    case 'EMAIL_UPDATE': {
      return {
        ...state,
        mailSendResponse: '',
      };
    }
    case 'SEND_ERROR_EMAIL': {
      return {
        ...state,
        isMailSendLoading: false,
        isSuccessEmail: false,
        isErrorEmail: true,
        mailSendResponse: 'Ошибка отправки почты',
        placeOfSend: state.placeOfSend,
        isUpdates: true,
      };
    }

    default:
      return state;
  }
};

export default email;
