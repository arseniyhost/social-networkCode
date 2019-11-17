const ADD_MESSAGE = 'social-media/dialogPage/ADD-MESSAGE';

let initState = {
    title: "DIALOGS",
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
    ]
};

const dialogPageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                message: [...state.message, { id: state.message.length + 1, message: action.text}]
            };
        }
        default:
            return state;
    }
}

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });

export default dialogPageReducer;