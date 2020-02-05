import React from "react";
function Logo(props) {
  const { text, render } = props;
  return (
    <>
      <span className={render}>{text}</span>
    </>
  );
}

export default Logo;
