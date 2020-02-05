import React from "react";

function Footer(props) {
  const { text, render } = props;
  return (
    <>
      <div className="footer-container">
        <span className="footer">{text}</span>
      </div>
    </>
  );
}

export default Footer;
