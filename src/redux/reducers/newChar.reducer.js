const newCharReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.payload];
        case 'ADD_RACE':
            return [...state, action.payload];
        case 'ADD_CLASS':
            return [...state, action.payload];
        case 'ADD_BACKGROUND':
            return [...state, action.payload];
        case 'ADD_BACKSTORY':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default newCharReducer;