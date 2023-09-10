const backgroundReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BACKGROUND':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default backgroundReducer;