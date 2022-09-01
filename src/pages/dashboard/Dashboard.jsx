import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Main from "../../assets/main.png";
import Loan from "../../assets/loan.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import AD from "../../assets/ad.png";

const Dashboard = () => {
  return (
    <div className="dash">
      <Sidebar />

      <div className="dashContainer small-screen">
        {/* <Navbar /> */}
        <h1>Hi, Samuel Leye👋🏼</h1>

        <div className="dashCards gap-5">
          <div className="dash-left">
            <div className="dash-mainCard">
              <div className="mainCard-left">
                <div className="name">
                  <div className="nametop flex-nowrap">
                    <p className="namesHeader">Balance</p>
                    ₦99,500,000.00
                  </div>
                  <div className="namebottom mt-1">
                    <p className="namesHeader">1225447865</p>
                  </div>
                </div>
                <div className="current">
                  <div className="circle w-[8px] h-[8px] rounded-full"></div>
                  <div className="current-txt">Current</div>
                </div>
                <Link to={"/transaction"}>
                  <div className="dash-transactionHistory-btn">
                    <div className="t-btn">
                      <Icon icon="uil:transaction" />
                    </div>
                    <div className="t-txt">Transaction history</div>
                  </div>
                </Link>
              </div>
              <div className="mainCard-right">
                <p className="mainCard-right-heading">NGN</p>
                <img src={Main} alt="mainCard icon" className="m-icon" />
              </div>
            </div>
          </div>

          <div className="dash-right">
            <div className="loan-mainCard">
              <div className="mainCard-left">
                <div className="name">
                  <div className="nametop">
                    <p className="namesHeader">Loan Balance</p>
                    ₦0.00
                  </div>
                  <div className="namebottom mt-1">
                    <p className="namesHeader">No active loan</p>
                  </div>
                </div>

                <Link to={"/loan"}>
                  <div className="loan-btn">
                    <div className="l-txt">Get loan</div>
                  </div>
                </Link>
              </div>
              <div className="mainCard-right">
                <p className="mainCard-right-heading">NGN</p>
                <img src={Loan} alt="mainCard icon" className="m-icon" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-[17px] mt-10 mb-3">Quick links</h3>
        <div className="linkCards mb-2">
          <div className="linkCard">
            <div className="txt">
              <div className="title">Pay Bills</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon1} alt="" />
            </div>
          </div>

          <div className="linkCard">
            <div className="txt">
              <div className="title">Get Quick Loan</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon2} alt="" />
            </div>
          </div>

          <div className="linkCard">
            <div className="txt">
              <div className="title">Send Money</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon3} alt="" />
            </div>
          </div>

          <div className="linkCard">
            <div className="txt">
              <div className="title">My Beneficiaries</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon4} alt="" />
            </div>
          </div>

          <div className="linkCard">
            <div className="txt">
              <div className="title">Transaction History</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon5} alt="" />
            </div>
          </div>

          <div className="linkCard">
            <div className="txt">
              <div className="title">Frequent Transaction</div>
              <div className="desc">Conveniently pay recurring bills</div>
            </div>
            <div className="illustration">
              <img src={icon6} alt="" />
            </div>
          </div>
        </div>

        <div className="ad">
          <img
            src={AD}
            alt=""
            className="w-[100%] object-contain cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
