import { updateUserName, updateUserEmail } from "./actionTypes";

export const updateNameInput = (input) => {
  return {
    type: updateUserName,
    payload: input,
  };
};

export const updateEmailInput = (input) => {
  return {
    type: updateUserEmail,
    payload: input,
  };
};
