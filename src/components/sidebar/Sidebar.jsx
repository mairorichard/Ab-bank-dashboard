import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Icon } from "@iconify/react";
import "./sidebar.css";

const Sidebar = () => {
  // // to change burger classes
  // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [menu_class, setMenuClass] = useState("menu hidden");
  // const [isMenuClicked, setIsMenuClicked] = useState(false);

  // // toggle burger menu change
  // const updateMenu = () => {
  //   if (!isMenuClicked) {
  //     setBurgerClass("burger-bar clicked");
  //     setMenuClass("menu visible");
  //   } else {
  //     setBurgerClass("burger-bar unclicked");
  //     setMenuClass("menu hidden");
  //   }
  //   setIsMenuClicked(!isMenuClicked);
  // };

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* <div style={{ width: "100%", height: "100vh" }}>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>

        <div className={menu_class}></div> */}
      <div
        className="sidebar"
        style={{ flex: isOpen ? "1" : "0", width: isOpen ? "100%" : "" }}
      >
        <div className="top flex justify-between">
          <NavLink to={"/dashboard"} style={{ textDecoration: "none" }}>
            <span className="logo" style={{ display: isOpen ? "" : "none" }}>
              <img src={Logo} alt="" className="w-[200px] h-[110px] mt-3" />
            </span>
          </NavLink>
          <div className="bars" style={{ marginTop: isOpen ? "" : "30px" }}>
            {!isOpen ? (
              <Icon
                onClick={toggle}
                icon="ant-design:menu-outlined"
                className="text-[#028bcc]"
              />
            ) : (
              <Icon
                icon="iconoir:cancel"
                onClick={toggle}
                className="text-[#028bcc]"
              />
            )}
          </div>
        </div>

        {/* list items */}
        <div
          className="bottom"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <ul style={{ display: isOpen ? "" : "none" }}>
            <li>
              <NavLink
                to={"/dashboard"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
                onClick={() => setIsOpen(false)}
              >
                <Icon icon="bxs:dashboard" />
                <span style={{ display: isOpen ? "" : "none" }}>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/transfer"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="iconoir:data-transfer-both" />
                <span style={{ display: isOpen ? "" : "none" }}>Transfer</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/transaction"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="uil:transaction" />
                <span style={{ display: isOpen ? "" : "none" }}>
                  Transaction
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/card"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="bi:credit-card" />
                <span style={{ display: isOpen ? "" : "none" }}>Cards</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/loan"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="fluent:building-retail-money-20-regular" />
                <span style={{ display: isOpen ? "" : "none" }}>Loan</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/bills"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="fluent:money-16-regular" />
                <span style={{ display: isOpen ? "" : "none" }}>Bills</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/settings"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="clarity:settings-line" />
                <span style={{ display: isOpen ? "" : "none" }}>Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/"}
                style={{ textDecoration: "none" }}
                className="flex pl-6 p-2"
              >
                <Icon icon="jam:log-out" />
                <span style={{ display: isOpen ? "" : "none" }}>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
