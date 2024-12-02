import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="tabs">
        <div className="tab ">Cheyenne Bergson</div>
        <div className="tab">Jonathan Higgins</div>
        <div className="tab">Capt. Trunk</div>
        <div className="tab active">Hannibal Smith</div>
      </div>
      <div className="user-info">
        <button >Process Owner: HOD</button>
        <button >Admin</button>
        <button >Logout</button>
      </div>
    </div>
  );
};

export default Header;
