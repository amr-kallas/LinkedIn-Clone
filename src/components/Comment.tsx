import { useSpring, animated } from "@react-spring/web";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { connect } from "react-redux";
import user from "/images/user.jpeg";
import "./comment.css";
import { useState } from "react";
const Comment = (props: any) => {
  const animate = useSpring({
    from: { y: `100%` },
    to: { y: "0%" },
  });
  const [writeComment,setWriteComment]=useState("")
  return (
    <animated.div style={animate} className="comment">
      <div className="container box-comment">
        <div className="text-comment">
          <input type="text" value={writeComment} onChange={(e)=>setWriteComment(e.target.value)}/>
          <i>
            <AiOutlineSend />
          </i>
        </div>
        <div className="show-comments">
          <div className="show-comment">
            <div className="img-comment">
              {props.img ? (
                <img src={props.img} alt="" />
              ) : (
                <img src={user} alt="" />
              )}
            </div>
            <div className="info-comment">
              <p className="name">{props.user[0].name}</p>
              <p>hello man</p>
            </div>
          </div>
        </div>
        <div className="closed">
          <i onClick={()=>props.setComment('')}>
            <AiOutlineClose />
          </i>
        </div>
      </div>
    </animated.div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    user: state.User.user,
    img: state.User.img,
  };
};

export default connect(mapStateToProps)(Comment);
