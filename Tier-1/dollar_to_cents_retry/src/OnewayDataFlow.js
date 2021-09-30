import React from "react";
import { useState } from "react";

function OnewayDataFlow() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increase</button>
    </div>
  );
}

export default OnewayDataFlow;
