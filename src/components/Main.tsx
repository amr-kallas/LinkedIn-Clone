import React, { InputHTMLAttributes, useState } from "react";
import "./main.css";
import goolge from "/images/google.svg";
import { SlPicture } from "react-icons/sl";
import { RiVideoFill, RiArticleLine } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import Post from "./Post";
import { connect } from "react-redux";
import Article from "./Article";

const Main = (props: any) => {
  const [post, setPost] = useState(false);
  return (
    <>
      <div className="main">
        <div className="top-post">
          <div className="post">
            <div className="image">
              <img src={goolge} alt="" />
            </div>
            <input
              type="text"
              placeholder="start a post"
              onClick={() => setPost(true)}
            />
          </div>
          <div className="url">
            <div className="icon">
              <i style={{ color: "blue" }}>
                <SlPicture />
              </i>
              <p>Photo</p>
            </div>
            <div className="icon">
              <i style={{ color: "red" }}>
                <RiVideoFill />
              </i>
              <p>Video</p>
            </div>
            <div className="icon">
              <i style={{ color: "green" }}>
                <BiCalendarEvent />
              </i>
              <p>Event</p>
            </div>
            <div className="icon">
              <i style={{ color: "blue" }}>
                <RiArticleLine />
              </i>
              <p>Article</p>
            </div>
          </div>
        </div>
        <Article articles={props.articles} loading={props.loading} />
      </div>
      {post && <Post setPost={setPost} />}
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    articles: state.Articles.articles,
    loading: state.Articles.loading,
  };
};
export default connect(mapStateToProps)(Main);
