import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bills from "./pages/bills/Bills";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import SettingsSingle from "./pages/settingssingle/SettingsSingle";
import SignIn from "./pages/signin/SignIn";
import Transaction from "./pages/transaction/Transaction";
import Transfer from "./pages/transfer/Transfer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="transfer">
              <Route index element={<Transfer />} />
              {/* <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>

            <Route path="transaction">
              <Route index element={<Transaction />} />
              {/* <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
            <Route path="settings">
              <Route index element={<Settings />} />
              <Route path="settingssingle" element={<SettingsSingle />} />
            </Route>
            <Route path="bills">
              <Route index element={<Bills />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
