import React, { useEffect, useState } from "react";
import "./home.css";
import card from "/images/card-bg.svg";
import user from "/images/user.jpeg";
import { FaUserCheck, FaBookmark } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import Main from "./Main";
import RightSide from "./RightSide";
import { useShadowProvider } from "../context/Shadow";
import { connect } from "react-redux";
import { setImgProfile } from "../redux/actions/Action";
const Home = (props:any) => {
  const {post}=useShadowProvider()
  const [imgProfile,setImgProfile]=useState<any>("")
  const [img,setImg]=useState("")
  useEffect(()=>{
    if(imgProfile){
      setImg(URL.createObjectURL(imgProfile))
    }
  },[imgProfile])
  if(img){
    props.imgProfile(img)
  }
  return (
    <>
      <div className={`home`}>
        <div className="text">
          <a href="#">Hiring in a Hurry?</a>
          <p>
            Find a talented pros in record time with upwork and keep business
            moving
          </p>
        </div>
        {post&&(
          <div className="shadow"></div>
        )}
        <div className="boxes">
          <div className="left-side">
            <div className="box-top">
              <div className="head-img">
                <img src={card} alt="" />
              </div>
              {props.img?(
                <img src={props.img} className="camera" alt="" />
              ):(
                <img src={user} className="camera"/>
              )}
              <div className="texts">
                <h5>Welcome, {props.user[0].name}</h5>
                <label htmlFor="pic">Add a profile picture</label>
                <input type="file" name="pic" id="pic" style={{display:"none"}} onChange={(e)=>setImgProfile(e.target.files?.[0])} />
              </div>
              <hr />
              <div className="another-text">
                <div className="connection">
                  <p className="connect">Connections</p>
                  <p className="origin">Origin photo Network</p>
                </div>
                <div className="icon-friend">
                  <i>
                    <FaUserCheck />
                  </i>
                </div>
              </div>
              <hr />
              <div className="items">
                <i>
                  <FaBookmark />
                </i>
                <p>My items</p>
              </div>
            </div>
            <div className="box-bottom">
              <div className="left-box">
                <div className="left-box-text">
                  <p>Groups</p>
                  <p>Events</p>
                  <p>Follows</p>
                </div>
                <div className="icon-plus">
                  <i>
                    <BsPlus />
                  </i>
                </div>
              </div>
              <hr />
              <div className="more">
                <p>Discover More</p>
              </div>
            </div>
          </div>
          <Main />
          <RightSide />
        </div>
       
      </div>
    </>
  );
};
const mapStateToProps=(state:any)=>{
  return{
    user: state.User.user,
    img:state.User.img,
    articles: state.Articles.articles,
    }
}
const mapDispatchToProps=(dispatch:any)=>{
  return{
    imgProfile:(payload:any)=>dispatch(setImgProfile(payload))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
