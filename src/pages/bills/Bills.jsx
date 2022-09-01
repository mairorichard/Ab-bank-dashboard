import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Icon } from "@iconify/react";
import "./bills.css";
import Navbar from "../../components/navbar/Navbar";

const Bills = () => {
  return (
    <div className="bills">
      <Sidebar />

      <div className="billsContainer small-screen">
        {/* <div className="nav">
          <Navbar />
        </div> */}
        <h1 className="title">Bills to pay</h1>
        <div className="search">
          <Icon icon="bx:search-alt-2" className="s-icon ml-5" />
          <input type="text" placeholder="Find bill" />
        </div>
        <div className="bill-cards mt-12">
          <div className="card">
            <div className="card-icon">
              <Icon icon="fluent:building-retail-money-20-regular" />
            </div>

            <p className="text">Loans</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="ant-design:mobile-twotone" />
            </div>

            <p className="text">Mobile Top-up</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="iwwa:connection-o" />
            </div>

            <p className="text">Data purchase</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="codicon:home" />
            </div>

            <p className="text">Utility</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="entypo:tv" />
            </div>

            <p className="text">Cable Tv</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="jam:movie" />
            </div>

            <p className="text">Movie Ticket</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="bx:food-menu" />
            </div>

            <p className="text">Restaurants</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="bi:ticket-perforated" />
            </div>

            <p className="text">Event Tickets</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="ic:round-flight-takeoff" />
            </div>

            <p className="text">Book Flight</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="bytesize:work" />
            </div>

            <p className="text">Ecommerce</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="carbon:finance" />
            </div>

            <p className="text">Financial Services</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Icon icon="fe:credit-card" />
            </div>

            <p className="text">International Airtime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
