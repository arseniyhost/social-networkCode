import { setUser } from "./auth-reducer";

const SET_INITIALIZED = 'social-media/auth/SET_INITIALIZED';

let initState = {
    initialized: false
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedApp = () => ({ type: SET_INITIALIZED });

export const initializeAuth = () => (dispatch) => {
    let promise = dispatch(setUser());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedApp());
        })
}

export default appReducer;