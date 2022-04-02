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
      return {
        ...state,
        isMailSendLoading: false,
        isSuccessEmail: true,
        isErrorEmail: false,
        mailSendResponse: 'Почта отправлена успешно',
        placeOfSend: state.placeOfSend,
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
      };
    }
    case 'UPDATE_EMAIL_STATUS': {
      return {
        ...state,
        isSuccessEmail: false,
        isErrorEmail: false,
      };
    }
    default:
      return state;
  }
};

export default email;
