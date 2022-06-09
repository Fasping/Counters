import './CounterOne.css'
import React, { useState } from "react";
 
const CounterOne = () => {
    const [number, setNumber] = useState(0)
    
    const increase = () => {
        setNumber(number + 1)
    }
     const decrease = () => {
       setNumber(number - 1);
     };
    const reset = () => {
        setNumber(0)
    }

    return (
      <div className="CounterOne">
        <h2>1. Counter = {number}</h2>
        <button className="ButtonOne1" onClick={increase}>
          Increase
        </button>
        <button className="ButtonOne2" onClick={decrease}>
          Decrease
        </button>
        <button className="ButtonOne3"  onClick={reset}>
          Reset
        </button>
      </div>
    );
}

export default CounterOne