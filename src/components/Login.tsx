import React from "react";
import "./login.css";
import logo from "/images/login-logo.svg";
import google from "/images/google.svg";
import hero from "/images/login-hero.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  const user = useSelector((state: any) => state.User);
  const dispatch = useDispatch();
  return (
    <div className="login">
      <div className="container">
        <div className="top-bar">
          <img src={logo} alt="" />
          <div className="buttons-login">
            <Link to={'/join'} className="join">Join now</Link>
            <Link to={'/sign'} className="sign-in"> Sign in</Link>
          </div>
        </div>
        <div className="welcome">
          <div className="text">
            <h2>welcome to your professional community</h2>
            <div className="sign-google">
              <i><FcGoogle/></i>
              <button>
                  Sign in with Google
              </button>
            </div>
          </div>
          <img className="hero" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
