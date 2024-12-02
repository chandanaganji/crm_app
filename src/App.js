import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserInfoPanel from "./components/UserInfoPanel";
import ChatSection from "./components/ChatSection";
import AskCatura from "./components/AskCatura";
import ActionLauncher from "./components/ActionLauncher";
import CaseFavorite from "./components/CaseFavorite";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="body-content">
          <UserInfoPanel />
          <ChatSection />
          
        </div>
        <div className="app-container">
      <AskCatura />
      <ActionLauncher />
      <CaseFavorite />
    </div>

      </div>
    </div>
  );
};

export default App;
