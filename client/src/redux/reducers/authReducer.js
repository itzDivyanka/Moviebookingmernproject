// client/src/redux/reducers/authReducer.js
const initialState = {
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return { ...state, user: action.payload, error: null };
        case 'AUTH_ERROR':
            return { ...state, error: action.payload };
        case 'LOGOUT':
            return { ...state, user: null, error: null };
        default:
            return state;
    }
};
