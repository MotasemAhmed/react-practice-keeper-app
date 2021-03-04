import React, { useState } from "react";

function App() {

  setInterval(newTime,1000)
  let now = new Date().toLocaleTimeString();

  const [state, setstate] = useState(now);

  function newTime() {
    const currentTime = new Date().toLocaleTimeString();
    setstate(currentTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
