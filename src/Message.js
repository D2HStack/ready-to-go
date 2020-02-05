import React from "react";

function Message(props) {
  const { active, className } = props;
  return (
    <>
      <div className="message-container">
        <span className={className}>{active ? "Go ! " : "No Way ! "}</span>
      </div>
    </>
  );
}

export default Message;
