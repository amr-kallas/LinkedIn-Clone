import React, { useEffect, useState } from "react";
import { useSpring , animated } from "@react-spring/web";
import {
  FaSistrix,
  FaHome,
  FaUsers,
  FaShoppingBag,
  FaAngleDown,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";
import { BiMessageRounded, BiBell, BiUser, BiTable } from "react-icons/bi";
import {AiOutlineClose} from 'react-icons/ai'
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [signout, setSignout] = useState(false);
  const [work, setWork] = useState(false);
  const [bars, setBars] = useState(false);

  const animate=useSpring({
    width:bars?220:0,
    right:bars?-15:-300
  })

  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <h4>
            <FaLinkedin />
          </h4>
          <div className="input">
            <i>
              <FaSistrix />
            </i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <div className="box hov">
            <i>
              <FaHome />
            </i>
            <Link to={"/home"}>Home</Link>
          </div>
          <div className="box hov">
            <i>
              <FaUsers />
            </i>
            <Link to={""}>My Network</Link>
          </div>
          <div className="box hov">
            <i>
              <FaShoppingBag />
            </i>
            <Link to={""}>Jobs</Link>
          </div>
          <div className="box hov">
            <i>
              <BiMessageRounded />
            </i>
            <Link to={""}>Messaging</Link>
          </div>
          <div className="box hov">
            <i>
              <BiBell />
            </i>
            <Link to={""}>Notification</Link>
          </div>
          <div
            className="box"
            onClick={() => setSignout((current) => !current)}
          >
            <i>
              <BiUser />
            </i>
            <Link to={""} className="me">
              Me{" "}
              <i className="down">
                <FaAngleDown />
              </i>
            </Link>
            {signout && (
              <div className="out">
                <Link to={"/"}>sign out</Link>
              </div>
            )}
          </div>
          <div className="box" onClick={() => setWork((current) => !current)}>
            <i>
              <BiTable />
            </i>
            <Link to={""} className="me">
              Work{" "}
              <i className="down">
                <FaAngleDown />
              </i>
            </Link>
          </div>
        </div>
        <div className="toggle-menu">
          <FaBars
            style={{ cursor: "pointer" }}
            onClick={() => setBars(true)}
          />
          
            <animated.div style={animate} className="menu-bars">
              <i className="close" onClick={()=>setBars(false)}><AiOutlineClose/></i>
              <ul>
                <li>Home</li>
                <li>My NetWork</li>
                <li>Jobs</li>
                <li>Messaging</li>
                <li>Notification</li>
                <li onClick={() => setSignout((current) => !current)}>
                  Me{" "}
                  <i>
                    <FaAngleDown />
                  </i>
                </li>
                {signout && <li>Sign Out</li>}
                <li>
                  Work{" "}
                  <i>
                    <FaAngleDown />
                  </i>
                </li>
              </ul>
            </animated.div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
