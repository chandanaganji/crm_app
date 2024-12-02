import React from "react";
import "./ActionPanels.css";

const ActionPanels = () => (
  <div className="action-panels">
    <div className="panel ask-catura">
      <h3>Ask Catura</h3>
      <button>Greeting Template</button>
    </div>
    <div className="panel action-launcher">
      <h3>Action Launcher</h3>
      <button>Add Action</button>
    </div>
    <div className="panel case-favorite">
      <h3>Case Favorite</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
);

export default ActionPanels;
