import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

export const reducerCombine = combineReducers({
  User: userReducer,
  Articles: articleReducer,
});
