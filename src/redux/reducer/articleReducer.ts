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
        articles: [...state.articles, action.payload],
      };
    case actions.SET_LIKE:
      return {
        articles: state.articles.map((article) => {
          if (article.id == action.id) {
            return {
              ...article,
              isLike: { ...article.isLike, liked: !article.isLike.liked },
            };
          } else return article;
        }),
      };
    default:
      return state;
  }
};
export default articleReducer;
