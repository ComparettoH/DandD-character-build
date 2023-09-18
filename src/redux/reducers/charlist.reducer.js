const charListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CHARLIST':
        return action.payload;
      case 'ADD_CHAR':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default charListReducer;