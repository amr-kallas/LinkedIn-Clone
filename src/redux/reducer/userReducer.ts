import { USER_TYPE } from "../actions/ActionType";

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case USER_TYPE:
      return {
        user: [action.user]
      };
    default:
      return state;
  }
};
export default userReducer;
