import AsyncStorage from '@react-native-community/async-storage';

const initialValue = {
  userData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const authReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'POST_LOGIN_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_LOGIN_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'POST_LOGIN_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default authReducers;
