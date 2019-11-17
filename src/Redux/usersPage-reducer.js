import { userAPI } from "../app/app";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW = 'social-media/usersPage/FOLLOW';
const UNFOLLOW = 'social-media/usersPage/UNFOLLOW';
const SET_USERS = 'social-media/usersPage/SET_USERS';
const SET_CURRENT_PAGE = 'social-media/usersPage/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-media/usersPage/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-media/usersPage/TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'social-media/usersPage/FOLLOWING_IN_PROGRESS';

let initState = {
    users: [],
    totalUsers: 0,
    currentPage: 1,
    pageSize: 4,
    isFetching: true,
    followingInProgress: []
};

const usersPageReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
                // users: state.users.map((u) => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsers: action.totalUsers }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

export const followSuccses = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccses = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsers) => ({ type: SET_TOTAL_USERS_COUNT, totalUsers });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId });


export const getUsersThunk = (page, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await userAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
}

export const follow = userId => async dispatch => {
    dispatch(toggleFollowingInProgress(true, userId));

    let response = await userAPI.deleteUnfollow(userId);

    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccses(userId));
    }

    dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollow = userId => async dispatch => {
    dispatch(toggleFollowingInProgress(true, userId));

    let response = await userAPI.postFollow(userId);

    if (response.data.resultCode === 0) {
        dispatch(followSuccses(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export default usersPageReducer;