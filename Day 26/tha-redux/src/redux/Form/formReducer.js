import { updateUserName, updateUserEmail } from "./actionTypes";

const initialState = {
  userName: "",
  userEmail: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateUserName:
      return {
        ...state,
        userName: action.payload,
      };

    case updateUserEmail:
      return {
        ...state,
        userEmail: action.payload,
      };

    default:
      return state;
  }
};
