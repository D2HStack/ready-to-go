import React from "react";
function Logo(props) {
  const { text } = props;
  return (
    <>
      <span className="logo">{text}</span>
    </>
  );
}

export default Logo;
