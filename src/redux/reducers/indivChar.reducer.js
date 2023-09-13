const indivCharReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHAR':
            return action.payload;
        case 'DELETE_CHAR':
            return action.payload;
        case 'CHANGE_CHAR':
            return action.payload;
        default:
            return state;
    }
  };
  
  export default indivCharReducer;