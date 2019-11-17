import { createStore, combineReducers, applyMiddleware } from 'redux';
import profilePageReducer from './profilePage-reducer';
import dialogPageReducer from './dialogPage-reducer';
import sectionFriendsReducer from './sectionFriends-reducer';
import usersPageReducer from './usersPage-reducer';
import newsPageReducer from './newsPage-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer';

let renders = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sectionFriends: sectionFriendsReducer,
    usersPage: usersPageReducer,
    newsPage: newsPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(renders, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;