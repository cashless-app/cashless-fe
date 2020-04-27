const initialValue = {
  transactionData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const transactionReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'TOPUP_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'TOPUP_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'TOPUP_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        transactionData: action.payload,
      };

    default:
      return state;
  }
};

export default transactionReducers;
