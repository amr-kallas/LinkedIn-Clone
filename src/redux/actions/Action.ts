import * as actions from "./ActionType";
export const user = (payload: string) => {
  return {
    type: actions.USER_TYPE,
    user: payload,
  };
};
export const setLoading = (status: boolean) => {
  return {
    type: actions.SET_LOADING_STATUS,
    status: status,
  };
};
export const getArticles = (payload: any) => {
  return {
    type: actions.GET_ARTICLES,
    payload: payload,
  };
};
