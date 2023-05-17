import React from "react";
import "./home.css";
import card from "/images/card-bg.svg";
import camera from "/images/photo.svg";
import { FaUserCheck, FaBookmark } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import Main from "./Main";
import RightSide from "./RightSide";
const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <a href="#">Hiring in a Hurry?</a>
        <p>
          Find a talented pros in record time with upwork and keep business
          moving
        </p>
      </div>
      <div className="boxes">
        <div className="left-side">
          <div className="box-top">
            <div className="head-img">
              <img src={card} alt="" />
            </div>
            <img src={camera} className="camera" alt="" />
            <div className="texts">
              <h5>Welcome, Amr Kallas</h5>
              <a href="">Add a photo</a>
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
  );
};

export default Home;
