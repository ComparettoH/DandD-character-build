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
            [action.payload.property]: action.payload.value
            // cohort: 'Diamon'
        }

        /**
         * return {
         *    ...state,
         *      first_name: 'Liz'
         * }
         */

    }
    return state;
}

export default charToEdit;