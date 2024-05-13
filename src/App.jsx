import React, { useEffect, useState } from "react";
import { useCustomEffect } from "./hooks/useCustomEffect";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useCustomEffect(() => {
    console.log("use effect triggered", counter1);

    return () => {
      console.log("cleanup called");
    };
  }, [counter1]);

  console.log("re-rendered");

  return (
    <div>
      <div>{counter1}</div>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      <button onClick={() => setCounter1(counter2 - 1)}>-</button>
    </div>
  );
};

export default App;
