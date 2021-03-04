import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [hName, sethName] = useState("");
  const [btnBG, setBtnBG] = useState("white");

  function handleClick(e) {
    sethName(name);
    e.preventDefault();
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
      <form onChange={handleChange}>
        <h1>Hello, {hName}</h1>
        <input value={name} type="text" placeholder="What's your name?" />
        <button
          type="submit"
          onClick={handleClick}
          style={{ backgroundColor: btnBG }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
