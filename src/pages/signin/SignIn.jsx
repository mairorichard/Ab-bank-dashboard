import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Cover from "../../assets/cover.png";
import { Icon } from "@iconify/react";
import "./signin.css";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="sign-in-nav">
        <img src={Logo} alt="logo" className="w-[200px] h-[110px] sign-logo" />

        <button className="sign-btn-top">Sign up</button>
      </div>
      <div className="small-img">
        <img src={Cover} alt="" />
      </div>
      <div className="main">
        <div className="left">
          <div className="">
            <h1 className="heading">
              Welcome to AB Microfinance Bank
              <span className="special">Nigeria</span>
            </h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ametultricies mattis nibh dolor in sit eu commodo duis. Mattis
              nunc, a lobortis.
            </p>
          </div>

          <div className="input flex">
            <Icon icon="ic:round-email" className="sign-icon" />
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input flex">
            <Icon icon="ri:lock-password-fill" className="sign-icon" />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />

            <Icon icon="akar-icons:eye" className="eye-icon" />
          </div>
          <div className="bottom-btns">
            <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
              <button className="login-btn">Log In</button>
            </Link>
            <button className="sign-btn-bottom">Sign up</button>
          </div>

          <p className="forgot">Forgot your password</p>
        </div>
        <div className="right">
          <img src={Cover} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
