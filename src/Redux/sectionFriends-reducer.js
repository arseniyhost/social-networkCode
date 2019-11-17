let initState = {
    friend: [
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
};

const sectionFriendsReducer = (state = initState, action) => {
    return {
        ...state
    }
}

export default sectionFriendsReducer;