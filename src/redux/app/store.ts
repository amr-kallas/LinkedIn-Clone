import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { reducerCombine } from "../reducer";

export const store=createStore(reducerCombine, applyMiddleware(reduxThunk))