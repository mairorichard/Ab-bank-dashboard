import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settingssingle.css";

const SettingsSingle = () => {
  return (
    <div className="settingssingle">
      <Sidebar />
      <div className="singleContainer small-screen">
        <Link to={"/settings"} style={{ textDecoration: "none" }}>
          <div className="single-heading">
            <Icon icon="dashicons:arrow-left-alt2" className="c-icon" />
            <p>Change password</p>
          </div>
        </Link>
        <div className=" c-inputs mt-5">
          <div className="c-input flex align-middle">
            <input
              type="password"
              name="old-password"
              id="password"
              placeholder="Old Password"
            />
          </div>
          <div className="c-input flex align-middle">
            <input
              type="password"
              name="new-password"
              id="new-password"
              placeholder="New Password"
            />
          </div>
          <div className="c-input flex align-middle">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <Link to={"/settings"} style={{ textDecoration: "none" }}>
          <button className="password-btn">Change password</button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsSingle;
