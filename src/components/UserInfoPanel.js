import React from "react";
import "./UserInfoPanel.css";

const UserInfoPanel = () => {
  return (
    <div className="user-info-panel">
      <h2>Hannibal Smith</h2>
      <p>1 Market Street, San Francisco, CA 94105</p>
      <div className="details">
        <div className="detail-item">
          <h4>Customer ID</h4>
          <p>12345</p>
        </div>
        <div className="detail-item">
          <h4>Email Address</h4>
          <p>rachel@example.com</p>
        </div>
        <div className="detail-item">
          <h4>Phone Number</h4>
          <p>805-128-9805</p>
        </div>
      </div>
      <button className="widget-btn">Add </button>

    </div>
  );
};

export default UserInfoPanel;
