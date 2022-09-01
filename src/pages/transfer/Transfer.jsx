import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Icon } from "@iconify/react";
import "./transfer.css";
import { Link } from "react-router-dom";
import Main from "../../assets/main.png";
import Navbar from "../../components/navbar/Navbar";

const Transfer = () => {
  return (
    <div className="transfer">
      <Sidebar />
      {/* <Navbar /> */}
      <div className="transferContainer small-screen">
        <h1>Transfer</h1>
        <div className="t-cards">
          <div className="mainCard">
            <div className="mainCard-left">
              <div className="name">
                <div className="nametop">
                  <p className="namesHeader">Account name</p>
                  Samuel Leye
                </div>
                <div className="namebottom mt-1">
                  <p className="namesHeader">Account number</p>
                  1225447865
                </div>
              </div>
              <div className="current">
                <div className="circle w-[8px] h-[8px] rounded-full"></div>
                <div className="current-txt">Current</div>
              </div>
              <Link to={"/transaction"}>
                <div className="transactionHistory-btn">
                  <div className="t-btn">
                    <Icon icon="uil:transaction" />
                  </div>
                  <div className="t-txt">Transaction history</div>
                </div>
              </Link>
            </div>
            <div className="mainCard-right">
              <p className="mainCard-right-heading">NGN</p>
              <img
                src={Main}
                alt="mainCard icon"
                className="w-[129px] h-[134px]"
              />
            </div>
          </div>
          <div className="others">
            <div className="small-card bg-[#055983] text-white">
              <div className="small-title">Balance:</div>
              <div className="amount">₦99,500,000.00</div>
            </div>
            <div className="small-card">
              <div className="small-title">Single Transfer Limit:</div>
              <div className="amount">₦10,000,000.00</div>
            </div>
            <div className="small-card">
              <div className="small-title">Daily Transfer Limit:</div>
              <div className="amount">₦10,000,000.00</div>
            </div>
          </div>
        </div>

        <div className="t-form">
          <select name="Select bank">
            <option value="" selected>
              Select Bank
            </option>
            <option value="value1">Access Bank</option>
            <option value="value2">Union Bank</option>
            <option value="value3">First Bank</option>
            <option value="value1">Access Bank</option>
            <option value="value2">Union Bank</option>
            <option value="value3">First Bank</option>
            <option value="value1">Access Bank</option>
            <option value="value2">Union Bank</option>
            <option value="value3">First Bank</option>
            <option value="value1">Access Bank</option>
            <option value="value2">Union Bank</option>
          </select>

          <div className="t-input flex">
            <input
              type="text"
              name="acct"
              id="acct"
              placeholder="Account Number"
            />
          </div>
          <div className="t-input flex">
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
            />
          </div>
          <div className="t-input flex">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Pin"
            />
          </div>
        </div>
        <Link to={"/transaction"}>
          <div className="main-t-btn">Transfer Funds</div>
        </Link>
      </div>
    </div>
  );
};

export default Transfer;
