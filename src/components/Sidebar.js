import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    "Queue",
    "Workflow",
    "Admin",
    "Asset",
    "Parent",
    "Option One",
    "All Accessories",
    "Internal Audit",
    "Decorating",
    "Presenting",
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h3>RISK HAWK</h3>
        <p>Mitigate Your Exposure</p>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
