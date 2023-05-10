import { types } from '../types/types';

const initialState = {
    checking: true,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                logged: true,
                checking: false,
            };

        case types.authCheckingFinish:
            return {
                ...state,
                logged: true,
                checking: false,
            };

        case types.authLogout:
            return {
                checking: false,
                logged: false,
            };
        default:
            return state;
    }
};
