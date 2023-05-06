import * as actions from "./ActionType"
export const user=(payload:string)=>{
    return{
        type:actions.USER_TYPE,
        user:payload
    }
}