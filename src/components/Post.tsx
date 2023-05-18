import { useState, useEffect, useId } from "react";
import React from "react";
import "./post.css";
import goolge from "/images/google.svg";
import { AiOutlineClose } from "react-icons/ai";
import { SlPicture } from "react-icons/sl";
import { RiVideoFill } from "react-icons/ri";
import { BiMessageEdit } from "react-icons/bi";
import ReactPlayer from "react-player";
import { getArticles, setLoading } from "../redux/actions/Action";
import { connect } from "react-redux";
type post = {
  setPost: React.Dispatch<React.SetStateAction<boolean>>;
  gitArticle: Function;
  articles: any;
  setLoading: Function;
};

const Post = (props: post) => {
  const setID = useId();
  function reset() {
    props.setLoading(true);
    props.setPost(false);
    props.gitArticle({
      id: setID,
      description: text,
      image: showImg,
      video: video,
      isLike: {
        count: 0,
        liked: false,
      },
    });
    setMedia("");
    setText("");
    setImg("");
    setShowImg("");
    setVideo("");
    props.setLoading(false);
  }
  const [media, setMedia] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState<any>("");
  const [showImg, setShowImg] = useState("");
  const [video, setVideo] = useState("");
  useEffect(() => {
    if (img) {
      setShowImg(URL.createObjectURL(img));
    }
  }, [img]);
  return (
    <>
        <div className="shadow"></div>
      <div className="postes">
        <div className="header-postes">
          <p>Create a post</p>
          <i onClick={() => props.setPost(false)}>
            <AiOutlineClose />
          </i>
        </div>
        <hr />
        <div className="main-postes">
          <div className="head-main-postes">
            <div className="image">
              <img src={goolge} alt="" />
            </div>
            <h6>Amr Kallas</h6>
          </div>
          <div className="texts">
            <textarea
              placeholder="what do you want to talk about"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {media == "image" ? (
            <div className="sl-img">
              <input
                type="file"
                id="input"
                onChange={(e) => setImg(e.target.files?.[0])}
              />
              <label
                htmlFor="input"
                className={`${img ? "label-none" : "label-block"}`}
              >
                Select an image for share
              </label>
              {img && (
                <div className="show-img">
                  <img className="chosen-img" src={showImg} alt={img.name} />
                </div>
              )}
            </div>
          ) : media == "video" ? (
            <div className="sl-video">
              <input
                type="text"
                placeholder="Please input a video link"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />
              {video && (
                <div className="show-vid">
                  <ReactPlayer url={video} width="100%" height="100%" />
                </div>
              )}
            </div>
          ) : null}
          <div className="footer-main-postes">
            <div className="icon">
              <i onClick={() => setMedia("image")}>
                <SlPicture />
              </i>
              <i onClick={() => setMedia("video")}>
                <RiVideoFill />
              </i>
              <i>
                <BiMessageEdit />
              </i>
            </div>
            <div className="send">
              <button
                disabled={text ? false : true}
                className={`${text ? "allow" : "banned"}`}
                onClick={() => reset()}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    loading: state.Articles.loading,
    articles: state.Articles.articles,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    gitArticle: (payload: any) => dispatch(getArticles(payload)),
    setLoading: (payload: any) => dispatch(setLoading(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
