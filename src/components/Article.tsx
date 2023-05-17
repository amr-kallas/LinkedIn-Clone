import React, { useEffect, useState } from "react";
import google from "/images/google.svg";
import majed1 from "/images/majed1.jpg";
import "./article.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import ReactPlayer from "react-player";
import { setLike } from "../redux/actions/Action";
import { connect } from "react-redux";
type propsArticle = {
  articles: any;
  loading: boolean;
  setLike: Function;
};
const Article = (props: propsArticle) => {
  // console.log(props.articles)
  const date: any = new Date();
  const [like, setLike] = useState(false);
  return (
    <div className="article">
      {props && (
        <div className="article-boxes">
          {props.articles.map((article: any, index: number) => {
            return (
              <div className="box" key={index}>
                <div className="info">
                  <div className="name">
                    <div className="image">
                      <img src={majed1} alt="" />
                    </div>
                    <div className="text-info">
                      <p>Amr Kallas</p>
                      <span>amr.kallas@gmail.com</span>
                      <span>
                        {date.getDate()}/{date.getMonth() + 1}/
                        {date.getFullYear()}
                      </span>
                    </div>
                  </div>
                  <i>
                    <BsThreeDots />
                  </i>
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    setLike: (id: any) => dispatch(setLike(id)),
  };
};
export default connect(null, mapDispatchToProps)(Article);
