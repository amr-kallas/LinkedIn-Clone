import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const reducerCombine=combineReducers({
    User:userReducer
})