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
    case 'POST_REGISTER_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_REGISTER_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case 'POST_REGISTER_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        userData: action.payload,
      };
    case 'GET_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TOKEN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_TOKEN_FULFILLED':
      // console.log(action.payload ? JSON.parse(action.payload) : [], 'REDUCER');
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        resultLogin: action.payload ? JSON.parse(action.payload) : []
      };

    default:
      return state;
  }
};

export default authReducers;
