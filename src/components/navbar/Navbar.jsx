import React from "react";
import { Icon } from "@iconify/react";
import Profile from "../../assets/profile.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col ">
        <div className="profile-img flex">
          <Icon
            icon="clarity:notification-solid-badged"
            className="notification-icon"
          />
          <img
            src={Profile}
            alt="image of the profile"
            className="h-[60px] w-[60px] rounded-full object-cover"
          />
        </div>
        <div className="hr"></div>
      </div>
    </>
  );
};

export default Navbar;
