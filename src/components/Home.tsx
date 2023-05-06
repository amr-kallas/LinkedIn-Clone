import React from "react";
import "./home.css";
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
              <img src="" alt="" />
            </div>
            <img src="" alt="" />
            <div className="text">
              <h5>Welcome, Amr Kallas</h5>
              <a href="">Add a photo</a>
            </div>
            <hr />
            <div className="another-text">
              <div className="connection">
                <p>Connections</p>
                <p>Origin photo Network</p>
              </div>
              <div className="icon-friend">
                <i></i>
              </div>
            </div>
            <hr />
            <div className="itmes">
              <i></i>
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
                <i></i>
              </div>
            </div>
            <hr />
            <div className="more">
              <p>Discover More</p>
            </div>
          </div>
        </div>
        <div className="main"></div>
        <div className="right-side"></div>
      </div>
    </div>
  );
};

export default Home;
