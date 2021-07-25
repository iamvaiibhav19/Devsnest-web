import { createStore } from "redux";
import { formReducer } from "./Form/formReducer";

const store = createStore(formReducer);

export default store;
