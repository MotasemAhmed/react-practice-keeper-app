import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [btnBG, setBtnBG] = useState("white");

  function handleClick() {
    setHeadingText("Bye");
  }
  function handleMouseOver() {
    setBtnBG("black");
  }
  function handleMouseOut() {
    setBtnBG("white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: btnBG }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
