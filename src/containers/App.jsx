import React, { useState } from "react";

function App() {
  const [state, setstate] = useState(0);

  function increase() {
    setstate(state + 1);
  }

  function decrease() {
    setstate(state - 1);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
