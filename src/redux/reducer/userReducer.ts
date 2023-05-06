import { USER_TYPE } from "../actions/ActionType";

const initialState = {
  user:null
}
interface ActionType {
  type: string;
  payload: string;
}
const userReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case USER_TYPE:
      return {
        ...state,
        user: action.payload,
      };
      default:
        return state
  }
};
export default userReducer;
