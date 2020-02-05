import React, { useState } from "react";
import "./style.css";

// import components
import Logo from "./Logo";
import Toggle from "./Toggle";
import Message from "./Message";
import Footer from "./Footer";

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

  //   let toggle =[];
  //   let setToggle[];
  // const numButton = 4;
  //   for (let i = 1; i <= numButton; i++) {
  // const [toggleTemp
  //   }

  // const [reset, setReset] = useState(false);

  return (
    <>
      <Logo render="logo" text="Ready to Go"></Logo>
      <div>
        <div>
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
        </div>
        <Message active={flag} render="message"></Message>
      </div>
      <Footer
        render="footer"
        text="Made with React at le Reacteur by Hoang"
      ></Footer>
    </>
  );
}

export default App;
