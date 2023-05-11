import React from "react";
import "./post.css";
import goolge from "/images/google.svg";
import { AiOutlineClose } from "react-icons/ai";
import { SlPicture } from "react-icons/sl";
import { RiVideoFill } from "react-icons/ri";
import {BiMessageEdit} from 'react-icons/bi'
type post = {
  setPost: React.Dispatch<React.SetStateAction<boolean>>;
};
const Post = (props: post) => {
  return (
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
        <div className="text">
          <textarea placeholder="what do you want to talk about" />
        </div>
        <div className="footer-main-postes">
            <div className="icon">
                <i><SlPicture/></i>
                <i><RiVideoFill/></i>
                <i><BiMessageEdit/></i>
            </div>
            <div className="send">
                <button>post</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
