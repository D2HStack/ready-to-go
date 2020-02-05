import React from "react";

function Toggle(props) {
  const { counter, setCounter } = props;
  return (
    <>
      <div className="toggle-container">
        <button
          className={counter ? "toggle active" : "toggle passive"}
          onClick={() => {
            setCounter(true);
          }}
        >
          ON
        </button>
        <button
          className={counter ? "toggle passive" : "toggle active"}
          onClick={() => {
            setCounter(false);
          }}
        >
          OFF
        </button>
      </div>
    </>
  );
}

export default Toggle;
