const defaultState = {
  isLoadings: false,
  isError: false,
  isSendReview: false,
  textSendReviewSuccess: '',
  textSendReviewError: '',
};

const review = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEND_REVIEW': {
      return {
        ...state,
        isSendReview: true,
      };
    }
    case 'SEND_SUCCESS_REVIEW': {
      return {
        ...state,
        isLoadings: true,
        isSendReview: false,
        textSendReviewSuccess: 'Комментарий успешно добавлен',
      };
    }

    case 'SEND_ERROR_REVIEW': {
      return {
        ...state,
        isLoadings: false,
        isSendReview: false,
        isError: true,
        textSendReviewError: 'Ошибка, комменатрий не добавлен',
      };
    }

    default:
      return state;
  }
};

export default review;
