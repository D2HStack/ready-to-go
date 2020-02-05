import React from "react";

function Button(props) {
  const { set, setReset } = props;
  return (
    <>
      <button
        onClick={() => {
          setReset(true);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Button;
