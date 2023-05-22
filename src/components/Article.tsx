import React, { useEffect, useState } from "react";
import google from "/images/google.svg";
import user from "/images/user.jpeg";
import "./article.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import ReactPlayer from "react-player";
import { deletePost, edit_delete, setLike } from "../redux/actions/Action";
import { connect } from "react-redux";
type propsArticle = {
  articles: any;
  loading: boolean;
  setLike: Function;
  user:any
  img:any
  deletePost:Function,
  edit_delete:Function
};
const Article = (props: propsArticle) => {
  const [edit,setEdit]=useState(false)
  console.log(props.articles)
  const date: any = new Date();
  return (
    <div className="article">
      {props.articles && (
        <div className="article-boxes">
          {props.articles.map((article: any, index: number) => {
            return (
              <div className="box" key={index}>
                <div className="info">
                  <div className="name">
                    <div className="image">
                      {props.img?(
                      <img src={props.img} alt="" />
                      ):(
                      <img src={user} alt="" />
                      )}
                    </div>
                    <div className="text-info">
                      <p>{props.user[0].name}</p>
                      <span>{props.user[0].email}</span>
                      <span>
                        {date.getDate()}/{date.getMonth() + 1}/
                        {date.getFullYear()}
                      </span>
                    </div>
                  </div>
                  <i onClick={()=>props.edit_delete(article.id)}>
                    <BsThreeDots />
                  </i>
                  {article.editAndDelete&&(
                    <div className="information">
                      <p>Edit</p>
                      <hr />
                      <p onClick={()=>{props.deletePost(article.id)}}>Delete</p>
                    </div>
                  )}
                </div>
                <div className="description">
                  <p>{article.description}</p>
                </div>
                {article.image && (
                  <div className="post-image">
                    <img src={article.image} alt="" />
                  </div>
                )}
                {article.video && (
                  <div className="video">
                    <ReactPlayer
                      url={article.video}
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
                {article.isLike.liked && (
                  <div className="like">
                    <i>
                      <BiLike />
                    </i>
                    <p>You</p>
                  </div>
                )}
                <hr />
                <ul>
                  <li
                    onClick={() => {
                      props.setLike(article.id);
                    }}
                    className={`${article.isLike.liked ? "liked" : null}`}
                  >
                    {" "}
                    <i>
                      <BiLike />
                    </i>{" "}
                    Like
                  </li>
                  <li>
                    {" "}
                    <i>
                      <FaRegCommentDots />
                    </i>{" "}
                    Comment
                  </li>
                  <li>
                    {" "}
                    <i>
                      <IoMdShareAlt />
                    </i>{" "}
                    Share
                  </li>
                  <li>
                    {" "}
                    <i>
                      <IoIosSend />
                    </i>{" "}
                    Send
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps=(state:any)=>{
  return{
    user:state.User.user,
    img:state.User.img
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setLike: (id: any) => dispatch(setLike(id)),
    deletePost:(id:any)=>dispatch(deletePost(id)),
    edit_delete:(id:any)=>dispatch(edit_delete(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Article);
