const genderReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GENDER':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default genderReducer;

// Hopefull feature to be added as step in character build