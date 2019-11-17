import profilePageReducer, { addPost } from "./profilePage-reducer";

let state = {
    title: "PROFILE",
    post: [
        { id: 1, like: 12, message: "Hi, I'm from The USA and I want to friend with you" },
        { id: 2, like: 90, message: "Ohh It's cool. Don't matter!" },
        { id: 3, like: 5, message: "I wanna join to you" }
    ]  
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("some added");
    
    // 2. action
    let newState = profilePageReducer(state, action);

    // 3. expectation 
    expect(newState.post.length).toBe(4);
});

it('name of posts should be correct', () => {
    // 1. test data
    let action = addPost("some added");
    
    // 2. action
    let newState = profilePageReducer(state, action);

    // 3. expectation 
    expect(newState.post[3].message).toBe("some added");
});