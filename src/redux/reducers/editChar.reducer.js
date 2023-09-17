const charToEdit = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_STUDENT') {
        // Represents a char object
        return action.payload;
    }
    if (action.type === 'EDIT_ONCHANGE') {
        // Action.payload: { property: 'cohort', value: 'Diamon' }
        return {
            ...state,
            // 'first_name'
            // or 'last_name'
            [action.payload.character_name]: action.payload.value
            // cohort: 'Diamon'
        }
    
        /**
         * return {
         *    ...state,
         *      first_name: 'Liz'
         * }
         */

    }
    if (action.type === 'EDIT_RACE') {
        return {
            ...state,
            // 'first_name'
            // or 'last_name'
            [action.payload.character_race]: action.payload.value
            // cohort: 'Diamon'
        }
    }
    if (action.type === 'EDIT_CLASS') {
        return {
            ...state,
            // 'first_name'
            // or 'last_name'
            [action.payload.character_class]: action.payload.value
            // cohort: 'Diamon'
        }
    }
    if (action.type === 'EDIT_BACKGROUND') {
        return {
            ...state,
            // 'first_name'
            // or 'last_name'
            [action.payload.character_background]: action.payload.value
            // cohort: 'Diamon'
        }
    }
    if (action.type === 'EDIT_BACKSTORY') {
        return {
            ...state,
            // 'first_name'
            // or 'last_name'
            [action.payload.character_backstory]: action.payload.value
            // cohort: 'Diamon'
        }
    }
    return state;
}

export default charToEdit;