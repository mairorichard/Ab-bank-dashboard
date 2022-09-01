import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Icon } from "@iconify/react";
import "./transaction.css";
import { Users } from "../../components/table";
import TransIcon from "../../assets/transaction icon.png";
import Navbar from "../../components/navbar/Navbar";

const Transaction = () => {
  return (
    <div className="transaction">
      <Sidebar />
      <div className="transactionContainer small-screen">
        {/* <div className="nav">
          <Navbar />
        </div> */}
        <h1 className="title mb-3">Transactions</h1>
        <div className="trans-search">
          <Icon icon="bx:search-alt-2" className="s-icon ml-5" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="trans-table overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="main-table-head">
                <th className="px-4 py-2 font-semibold text-left text-white whitespace-nowrap">
                  Transaction
                </th>
                <th className="py-2 font-semibold text-left text-white whitespace-nowrap">
                  Amount
                </th>
                <th className="date-head py-2 font-semibold text-left text-white whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Users.map((item) => (
                <tr key={item.id}>
                  <td className="flex py-2 text-gray-900 nowrap t-icon">
                    <img
                      src={TransIcon}
                      alt="transaction icon"
                      className="trans-icon"
                    />
                    <div className="pl-4">
                      <div className=""> {item.title}</div>
                      <div className="text-[15px]">{item.desc}</div>
                    </div>
                  </td>
                  <td className="py-2 text-gray-900 whitespace-nowrap">
                    {item.amount}
                  </td>
                  <td className="date-body first-line:py-2 text-gray-900 whitespace-nowrap">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
