import React from "react";
import "./ActionLauncher.css";

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <h3 className="section-heading">Action Launcher</h3>
      <input
        type="text"
        className="search-input"
        placeholder="Search actions..."
      />
      <div className="action-buttons">
        <button className="action-btn">Add Action</button>
        <button className="action-btn">Fee Reversal</button>
      </div>
      <div className="additional-actions">
        <button>Retail Onboarding</button>
        <button>Address Update</button>
      </div>
    </div>
  );
};

export default ActionLauncher;
