const defaultState = {
  isMailSendLoading: false,
  isSuccessEmail: false,
  isErrorEmail: false,
  mailSendResponse: '',
};

const email = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEND_EMAIL': {
      return {
        ...state,
        isMailSendLoading: true,
      };
    }
    case 'SEND_SUCCESS_EMAIL': {
      return {
        ...state,
        ...action.payload,
        isMailSendLoading: false,
        isSuccessEmail: true,
        mailSendResponse: 'Почта отправлена успешно',
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
      };
    }

    default:
      return state;
  }
};

export default email;
