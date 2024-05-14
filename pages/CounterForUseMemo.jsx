import { useState } from "react";
import { useCustomUseMemo } from "../src/hooks/useCustomUseMemo";

const CounterForUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squaredValue = () => {
    console.log("expensive calculation")
    return counter * counter;
  };

  const memoisedSquaredValue = useCustomUseMemo(squaredValue, [counter])

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2>Squared Counter: {memoisedSquaredValue}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <div>------------</div>
      <h1>Counter: {counter2}</h1>
      {/* <h2>Squared Counter2: {squaredValue()}</h2> */}
      <button onClick={() => setCounter2((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter2((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default CounterForUseMemo;
