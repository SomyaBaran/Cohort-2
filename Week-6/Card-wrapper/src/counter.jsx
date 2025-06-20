//// Counter app --> Tried on my own too


import React from "react";
import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);


  function Counter(){
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={Counter}>Count {count}</button>
    </div>
  )
}

export default App;