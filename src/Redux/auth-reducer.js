import { authAPI } from "../app/app";
import { stopSubmit } from 'redux-form';

const SET_AUTH_DATA = 'social-media/auth/SET_AUTH_DATA';
const ERROR_SUMMARY = 'Login or password is wrong';

let initState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const usersPageReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state, ...action.data
            }
        }
        default:
            return state;
    }
}

export const setAuthData = (userId, login, email, isAuth) => ({ type: SET_AUTH_DATA, data: { userId, login, email, isAuth } });

export const setUser = () => async dispatch => {
    let response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthData(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(setUser());
    }
    else {
        let error = response.data.messages.length > 0 ? response.data.messages[0] : ERROR_SUMMARY;
        dispatch(stopSubmit('login', { _error: error }));
    }
}

export const logout = () => async dispatch => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}



export default usersPageReducer;