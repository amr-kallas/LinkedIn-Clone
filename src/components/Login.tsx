import React from "react";
import './login.css'
import logo from '/images/login-logo.svg'
import google from '/images/google.svg'
import hero from '/images/login-hero.svg'
import { useSelector ,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Login = () => {
  const user=useSelector((state:any)=>state.User)
  const dispatch=useDispatch()
  return (
    <div className="login">
      <div className="container">
        <div className="top-bar">
          <img src={logo} alt="" />
          <div className="buttons-login">
            <button className="join">Join now</button>
            <button className="sign-in">Sign in</button>
          </div>
        </div>
        <div className="welcome">
          <div className="text">
            <h2>welcome to your professional community</h2>
            <div className="sign-google">
            <img className="google" src={google} alt="" /> 
              <button><Link className="button-sign" to={'home'}>Sign in with Google</Link></button>
            </div>
          </div>
          <img className="hero" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
