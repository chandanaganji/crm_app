import React from "react";
import "./ChatSection.css";

const ChatSection = () => {
  return (
    <div className="chat-section">
      <div className="conversation">
        <h3>Conversation</h3>
        <div className="message">Lorem ipsum dolor sit amet...</div>
      </div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  );
};

export default ChatSection;
