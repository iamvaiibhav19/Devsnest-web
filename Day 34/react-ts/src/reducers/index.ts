import { combineReducers } from "redux";
// import { TypeOfTag } from "typescript";
// import counterReducer from "./counterReducer";
import noteReducer from "./notesReducer";

const rootReducer = combineReducers({
  //   counter: counterReducer,
  notes: noteReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
