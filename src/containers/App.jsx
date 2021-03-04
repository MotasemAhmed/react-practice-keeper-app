import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [hName, sethName] = useState("");
  const [btnBG, setBtnBG] = useState("white");

  function handleClick() {
    sethName(name);
  }
  function handleMouseOver() {
    setBtnBG("black");
  }
  function handleMouseOut() {
    setBtnBG("white");
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello, {hName}</h1>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
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
