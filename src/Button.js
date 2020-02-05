import React from "react";

function Button(props) {
  const { reset, setReset } = props;
  return (
    <>
      <button
        onClick={() => {
          setReset(true);
        }}
        className={reset ? "button active" : "button passive"}
      >
        Reset
      </button>
    </>
  );
}

export default Button;
