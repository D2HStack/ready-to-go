import React from "react";

function Footer(props) {
  const { text, render } = props;
  return (
    <>
      <span className={render}>{text}</span>
    </>
  );
}

export default Footer;
