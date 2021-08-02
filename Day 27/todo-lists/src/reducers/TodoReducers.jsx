const TodoReducers = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_ITEM") {
    return state.filter((item, index) => index !== action.payload);
  }
  // } else if (action.type === "CHECK_BOX") {
  //   return state.findIndex;
  // }
  // else if (action.type == "EDIT_ITEM") {
  //   return 
  // }

  return state;
};

export default TodoReducers;
