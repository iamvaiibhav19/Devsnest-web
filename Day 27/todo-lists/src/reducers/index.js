import TodoReducers from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: TodoReducers,
});

export default rootReducer;
