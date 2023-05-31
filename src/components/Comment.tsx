import { useSpring, animated } from "@react-spring/web";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { connect } from "react-redux";
import user from "/images/user.jpeg";
import "./comment.css";
import { useState } from "react";
import { comment } from "../redux/actions/Action";
const Comment = (props: any) => {
  const animate = useSpring({
    from: { y: `100%` },
    to: { y: "0%" },
  });
  const [writeComment, setWriteComment] = useState("");

  const handler = (e: any) => {
    if(writeComment){
      e.preventDefault();
      setWriteComment("");
      props.comment({
        comment: writeComment,
        id: props.commentID,
      });
    }
  };
  console.log(props.articles);
  console.log(props.commentID);
  return (
    <animated.div style={animate} className="comment">
      <div className="container box-comment">
        <div className="text-comment">
          <input
            type="text"
            value={writeComment}
            onChange={(e) => setWriteComment(e.target.value)}
          />
          <i onClick={(e) => handler(e)}>
            <AiOutlineSend />
          </i>
        </div>
        <div className="show-comments">
          {props.articles.map((article: any) => {
            return (
              <div >
                {article.id == props.commentID ? (
                  <div>
                    {article.comment.length
                      ? article.comment.map((comment: any,index:any) => {
                          return (
                            <div key={index} className="show-comment">
                              <div className="img-comment">
                                {props.img ? (
                                  <img src={props.img} alt="" />
                                ) : (
                                  <img src={user} alt="" />
                                )}
                              </div>
                              <div className="info-comment">
                                <p className="name">{props.user[0].name}</p>
                                <p>{comment.comment}</p>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="closed">
          <i onClick={() => props.setComment("")}>
            <AiOutlineClose />
          </i>
        </div>
      </div>
    </animated.div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    articles: state.Articles.articles,
    user: state.User.user,
    img: state.User.img,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    comment: (payload: any) => dispatch(comment(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
