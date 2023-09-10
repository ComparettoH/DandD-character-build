const charListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CHARLIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default charListReducer;