const initialValue = {
    nasabahData: [],
    errorMsg: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false,
};

const nasabahReducers = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_ALL_NASABAH_PENDING':
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_ALL_NASABAH_REJECTED':
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errorMsg: action.payload.data,
            };
        case 'GET_ALL_NASABAH_FULFILLED':
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                nasabahData: action.payload.data,
            };

        default:
            return state;
    }
};

export default nasabahReducers;
