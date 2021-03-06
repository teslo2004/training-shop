const defaultState = {
  isLoadings: false,
  isError: false,
  isUpdate: false,
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
        isUpdate: true,
        textSendReviewSucces: '',
        textSendReviewError: '',
      };
    }
    case 'SEND_SUCCESS_REVIEW': {
      return {
        ...state,
        data: action.payload,
        isLoadings: true,
        isSendReview: false,
        textSendReviewSuccess: 'Комментарий успешно добавлен',
        isUpdate: false,
      };
    }

    case 'SEND_SUCCESS_REVIEW_CLOSE': {
      return {
        ...state,
        isLoadings: false,
        isSendReview: false,
        textSendReviewSuccess: '',
        textSendReviewError: '',
      };
    }

    case 'SEND_UPDATE': {
      return {
        ...state,
        textSendReviewError: '',
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
