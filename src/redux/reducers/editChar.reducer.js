const charToEdit = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_STUDENT') {
        // Represents a char object
        return action.payload;
    }
    if (action.type === 'EDIT_NAME') {
       return {
        ...state,
        [action.payload.property]: action.payload.value
       } 
    }
    if (action.type === 'EDIT_RACE') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
    if (action.type === 'EDIT_CLASS') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
    if (action.type === 'EDIT_BACKGROUND') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
    if (action.type === 'EDIT_BACKSTORY') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
    return state;
}

export default charToEdit;