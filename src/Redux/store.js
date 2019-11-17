import profilePageReducer from "./profilePage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sectionFriendsReducer from "./sectionFriends-reducer";

let store = {
    _state: {
        profilePage: {
            post: [
                { id: 1, like: 12, message: "Hi, I'm from The USA and I want to friend with you" },
                { id: 2, like: 90, message: "Ohh It's cool. Don't matter!" },
                { id: 3, like: 5, message: "I wanna join to you" }
            ],
            newPostText: 'send Post'
        },
        dialogPage: {
            dialog: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Mishell' },
                { id: 3, name: 'Keni' },
                { id: 4, name: 'Edward' },
                { id: 5, name: 'Margo' },
                { id: 6, name: 'Steve' }
            ],

            message: [
                { id: 1, message: 'Hi, How are you?' },
                { id: 2, message: "Hello. I'm fine. Yesterday was grate and you?" },
                { id: 3, message: "Ohh it's cool I'm glad for you" },
                { id: 4, message: "Yo" },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ],
            newMessageText: ''
        },
        sectionFriends: {
            guys: [
                {
                    id: 1,
                    name: "John"
                },
                {
                    id: 2,
                    name: "Lisa"
                },
                {
                    id: 3,
                    name: "Misha"
                }
            ]
        }
    },
    _callbackSub() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callbackSub = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
        this._state.sectionFriends = sectionFriendsReducer(this._state.sectionFriends, action);

        this._callbackSub(this._state);
    }
};

window.store = store;

export default store;