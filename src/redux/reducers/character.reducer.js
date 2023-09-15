const characterReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHAR':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'SET_CHAR':
            return {
                ...state,
                char: action.payload,
                loading: false,
                error: null
            };
        case 'CHANGE_CHAR':
            return action.payload;
        default:
            return state;
    }
  };
  
  export default characterReducer;