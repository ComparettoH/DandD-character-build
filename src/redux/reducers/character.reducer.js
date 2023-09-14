const characterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHAR':
            return action.payload;
        case 'FETCH_CHAR':
            return action.payload;
        case 'CHANGE_CHAR':
            return action.payload;
        default:
            return state;
    }
  };
  
  export default characterReducer;