import React from "react";

function Toggle(props) {
  const { counter, setCounter } = props;
  return (
    <>
      <button
        className={counter ? "active" : "passive"}
        onClick={() => {
          setCounter(true);
        }}
      >
        ON
      </button>
      <button
        className={counter ? "passive" : "active"}
        onClick={() => {
          setCounter(false);
        }}
      >
        OFF
      </button>
    </>
  );
}

export default Toggle;
