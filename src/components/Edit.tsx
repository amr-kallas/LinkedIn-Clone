import { useState, useEffect, useId } from "react";
import React from "react";
import "./post.css";
import "./edit.css"
import user from "/images/user.jpeg";
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
  user:any
  img:any
  article:any,
  setEdit:any
};

const Edit = (props: post) => {
  console.log(props.articles)
  function reset() {
    setMedia("");
    setText("");
    setImg("");
    setShowImg("");
    setVideo("");
  }
  const editTheArticle=()=>{
    props.articles.map((art:any)=>{
      if(art.id==props.article.id){
        art.description=text,
        art.image=showImg,
        art.video=video
      }
    })
    props.setEdit(false)
  }
  const [media, setMedia] = useState(props.article.image?"image":"");
  const [text, setText] = useState(props.article.description);
  const [img, setImg] = useState<any>("");
  const [showImg, setShowImg] = useState(props.article.image);
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
          <p>Edit the post</p>
          <i onClick={() => props.setEdit(false)}>
            <AiOutlineClose />
          </i>
        </div>
        <hr />
        <div className="main-postes">
          <div className="head-main-postes">
            <div className="image">
              {props.img?(
                <img src={props.img}/>
              ):(
                <img src={user} alt="" />
              )}
            </div>
            <h6>{props.user[0].name}</h6>
          </div>
          <div className="texts">
            <textarea
              placeholder="what do you want to edit"
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
                htmlFor="input">
                Select an image for share
              </label>
              {(img || showImg) && (
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
                onClick={() => editTheArticle()}
              >
                Edit
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
    user: state.User.user,
    img:state.User.img
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    gitArticle: (payload: any) => dispatch(getArticles(payload)),
    setLoading: (payload: any) => dispatch(setLoading(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);

