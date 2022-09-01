import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer small-screen">
        <h1>Settings</h1>
        <div className="s-cards">
          <div className="card">
            <h3 className="title">Edit Profile</h3>
            <div className="desc">Edit your profile</div>
          </div>

          {/* the link to the single page */}
          <div className="card">
            <Link to={"/settings/settingssingle"}>
              <h3 className="title">Change Password</h3>
              <div className="desc">Change password and add new one</div>
            </Link>
          </div>

          <div className="card">
            <h3 className="title">Change/Reset PIN</h3>
            <div className="desc">Reset PIN</div>
          </div>

          <div className="card">
            <h3 className="title">Transaction Limits</h3>
            <div className="desc">View transaction limit</div>
          </div>

          <div className="card">
            <h3 className="title">Hide Account Balance</h3>
            <div className="desc">Hide or show your balance</div>
          </div>

          <div className="card">
            <h3 className="title">Two-Factor Authentication</h3>
            <div className="desc">For added security</div>
          </div>

          <div className="card">
            <h3 className="title">My Card Settings</h3>
            <div className="desc">Manage cards</div>
          </div>

          <div className="card">
            <h3 className="title">Help</h3>
            <div className="desc">Ge help</div>
          </div>

          <div className="card">
            <h3 className="title">FAQ</h3>
            <div className="desc">Frequently asked questions</div>
          </div>

          <div className="card">
            <h3 className="title">Contact Us</h3>
            <div className="desc">Get in touch with us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
