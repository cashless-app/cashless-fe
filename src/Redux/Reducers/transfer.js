const initialState = {
    resultTransfer: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
};

const transferReducers = (state = initialState, action) => {
    switch (action.type) {
        //GET
        case 'TRANSFER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'TRANSFER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'TRANSFER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                resultTransfer: action.payload
            };
        default:
            return {
                ...state,
            };
    }
};

export default transferReducers;
