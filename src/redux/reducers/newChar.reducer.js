const newCharReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.payload];
        case 'ADD_RACE':
            return [...state, action.payload];
        case 'ADD_CHAR':
            return []
        default:
            return state;
    }
};

export default newCharReducer;