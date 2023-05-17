import React from "react";
import "./rightSide.css";
import { HiBell } from "react-icons/hi";
import { BiHash } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import banner from "/images/banner-image.jpg";
const RightSide = () => {
  return (
    <div className="right-side">
      <div className="box-top">
        <div className="feed">
          <p>Add to your feed</p>
          <i>
            <HiBell />
          </i>
        </div>
        <div className="hashtag">
          <div className="hashtag-son">
            <i>
              <BiHash />
            </i>
          </div>
          <div className="text-right">
            <p>#LinkedIn</p>
            <p className="follow">Follow</p>
          </div>
        </div>
        <div className="hashtag">
          <div className="hashtag-son">
            <i>
              <BiHash />
            </i>
          </div>
          <div className="text-right">
            <p>#Video</p>
            <p className="follow">Follow</p>
          </div>
        </div>
        <p className="view">
          view all recommendations{" "}
          <i>
            <BsArrowRightShort />
          </i>
        </p>
      </div>
      <div className="box-bottom">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
