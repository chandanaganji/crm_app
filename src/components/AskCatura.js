
import React from "react";
import "./AskCatura.css";

const AskCatura = () => {
  return (
    <div className="ask-catura">
      <h3 className="section-heading">Ask Catura</h3>
      <div className="catura-tabs">
        <button className="active-tab">WhatsApp</button>
        <button>Greetings</button>
      </div>
      <div className="template-box">
        <h4>Greeting Template</h4>
        <div className="template-actions">
          <button className="copy-btn">Copy to Send</button>
          <button className="preview-btn">Preview</button>
        </div>
      </div>
      <textarea className="message-input" placeholder="Type a message..."></textarea>
      <button className="send-btn">Send</button>
    </div>
  );
};

export default AskCatura;
