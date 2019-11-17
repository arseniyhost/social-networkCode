import { userAPI, profileAPI } from "../app/app";

const ADD_POST = 'social-meidia/progilePage/ADD-POST';
const SET_USER_PROFILE = 'social-meidia/progilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-meidia/progilePage/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-media/profilePage/SAVE_PHOTO_SUCCESS';

let initState = {
    title: "PROFILE",
    post: [
        { id: 1, like: 12, message: "Hi, I'm from The USA and I want to friend with you" },
        { id: 2, like: 90, message: "Ohh It's cool. Don't matter!" },
        { id: 3, like: 5, message: "I wanna join to you" }
    ],
    profile: null,
    status: ""
};

const profilePageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [...state.post, { id: state.post.length + 1, like: 0, message: action.postText }],
            }

        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photo}
            }
        }
        default:
            return state;
    }
}

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo });

export const getStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(response.data))
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const setProfile = userId => async dispatch => {
    let response = await userAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));
}

export const savePhoto = files => async dispatch => {
    let response = await profileAPI.savePhoto(files);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profilePageReducer;