import React, { useState } from "react";
import './CounterTwo.css'

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="CounterTwo">
      <h2>2. Counter = {count} </h2>

      <button className="ButtonTwo1" onClick={inc}>
        Increase
      </button>
      <button className="ButtonTwo2" onClick={dec}>
        Decrease
      </button>
      <button className="ButtonTwo3" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;
