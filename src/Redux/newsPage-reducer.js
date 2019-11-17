import { photoAPI } from "../app/app";

const SET_NEWS = 'social-media/newsPage/SET_NEWS';
const SET_TOTAL_NEWS_COUNT = 'social-media/newsPage/SET_TOTAL_NEWS_COUNT';
const SET_IS_FETCHING = 'social-media/newsPage/SET_IS_FETCHING';
const SET_CURRENT_NEW = 'social-media/newsPage/SET_CURRENT_NEW';
const SET_NEW_CONTENT = 'social-media/newsPage/SET_NEW_CONTENT';

let initState = {
    title: 'NEWS',
    news: [],
    totalNewsCount: 150,
    currentPage: 0,
    isFetching: true,
    newContent: null
};

const usersPageReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return { ...state, news: action.news }
        }
        case SET_TOTAL_NEWS_COUNT: {
            return { ...state, totalNewsCount: action.totalNewsCount }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_CURRENT_NEW: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_NEW_CONTENT: {
            return { ...state, newContent: action.newContent }
        }
        default:
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS, news });
export const setTotalNewsCount = (totalNewsCount) => ({ type: SET_TOTAL_NEWS_COUNT, totalNewsCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setCurrentNew = (currentPage) => ({ type: SET_CURRENT_NEW, currentPage });
export const setNewContent = (newContent) => ({ type: SET_NEW_CONTENT, newContent });


export const setAllNewsContentThunk = () => async dispatch => {
    let response = await photoAPI.getNews();

    dispatch(setNews(response.data));
    //dispatch(setTotalNewsCount(data.length));
}

export const getCurrentNewThunk = pageNumber => async dispatch => {
    let response = await dispatch(setCurrentNew(pageNumber));

    photoAPI.getNewContent(pageNumber);
    setNewContent(response.data);
}

export const getContentThunk = currentPage => async dispatch => {
    let response = await photoAPI.getNewContent(currentPage);

    dispatch(setNewContent(response.data));
}


export default usersPageReducer;