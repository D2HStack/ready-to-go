import React from "react";

function Message(props) {
  const { active } = props;
  return (
    <>
      <span>{active ? "Go ! " : "No Way ! "}</span>
    </>
  );
}

export default Message;
