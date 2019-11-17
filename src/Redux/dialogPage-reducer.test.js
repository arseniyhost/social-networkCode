import dialogPageReducer, {addMessage } from './dialogPage-reducer';

let state = {
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

it('add new message', () => {
    // 1. test data
    let action = addMessage("Hello there");
    
    // 2. action
    let newState = dialogPageReducer(state, action);

    // 3. expectation 
    expect(newState.message.length).toBe(7);
});