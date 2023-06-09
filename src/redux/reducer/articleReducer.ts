import { useEffect } from "react";
import * as actions from "../actions/ActionType";

export const initialState = {
  loading:false,
  articles: localStorage.getItem("articles")?JSON.parse(localStorage.getItem("articles")):[],
};

const articleReducer = (state = initialState, action: any) => {
  
    localStorage.setItem("loading",JSON.stringify(state.loading))
    localStorage.setItem("articles",JSON.stringify(state.articles))
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
        articles: state.articles.map((article:any) => {
          if (article.id == action.id) {
            return {
              ...article,
              isLike: { ...article.isLike, liked: !article.isLike.liked },
            };
          } else return article;
        }),
      };
      case actions.EDIT_DELTETE:
      return {
        articles: state.articles.map((article:any) => {
          if (article.id == action.editAndDelete) {
            return {
              ...article,
              editAndDelete:!article.editAndDelete
            };
          } else return article;
        }),
      };
    case actions.DELETE_POST:
      localStorage.removeItem("articles")
      return{
        ...state,
        articles:state.articles.filter((article:any)=>{
          return article.id !=action.deleteId
        }),
      }
    case actions.EDIT:
      return{
        ...state,
        articles:action.editPayload
      }
    case actions.COMMENT:
      return{
        ...state,
        articles:state.articles.map((article:any,index:any)=>{
          if(article.id==action.message.id){
            return{
              ...article,
              comment:[...article.comment,action.message]
            }
          }else return article
          
        })
        
      }
    default:
      return state;
  }
  
};
export default articleReducer;
