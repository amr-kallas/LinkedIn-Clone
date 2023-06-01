import  * as actions   from "../actions/ActionType";

const initialState = {
  user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):[1],
  img:localStorage.getItem("img")?localStorage.getItem("img"):""
};

const userReducer = (state = initialState, action:any) => {
  localStorage.setItem("user",JSON.stringify(state.user))
  localStorage.setItem("img",state.img)
    switch (action.type) {
    case actions.USER_TYPE:
      return {
        ...state,
        user: [action.user]
      };
    case actions.SET_IMG:
      return{
        ...state,
        img:action.img
      }
      default:
        return state;
      }
    };
export default userReducer;
