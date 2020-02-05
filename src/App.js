import React, { useState } from "react";
import "./style.css";

// import components
import Logo from "./Logo";
import Toggle from "./Toggle";
import Message from "./Message";
import Footer from "./Footer";
import Button from "./Button";

function App() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  let flag = false;
  if (toggle1 && toggle2 && toggle3 && toggle4) {
    flag = true;
  } else {
    flag = false;
  }

  const [reset, setReset] = useState(false);
  if (reset) {
    // all toggle to be false
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    // reset teh button reset
    setReset(false);
  }

  return (
    <>
      <Logo text="Ready to Go"></Logo>
      <hr></hr>
      <div>
        <div className="main">
          <div className="pad">
            <Toggle
              counter={toggle1}
              setCounter={setToggle1}
              render="toggle"
            ></Toggle>
            <Toggle
              counter={toggle2}
              setCounter={setToggle2}
              render="toggle"
            ></Toggle>
            <Toggle
              counter={toggle3}
              setCounter={setToggle3}
              render="toggle"
            ></Toggle>
            <Toggle
              counter={toggle4}
              setCounter={setToggle4}
              render="toggle"
            ></Toggle>
            <Button setReset={setReset}></Button>
          </div>
          <Message
            active={flag}
            render="message"
            className={flag ? "message bg-green" : "message bg-red"}
          ></Message>
        </div>
      </div>
      <Footer text="Made with React at le Reacteur by Hoang"></Footer>
    </>
  );
}

export default App;
