import * as actions from "../actions/ActionType";
export const initialState = {
  loading: false,
  articles: [],
};
const articleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actions.GET_ARTICLES:
      return {
        ...state,
        articles:[...state.articles,action.payload],
      };
    default:
      return state;
  }
};
export default articleReducer