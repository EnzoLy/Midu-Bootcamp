import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = ({ counter }) => <h1>{counter}</h1>;

const INIT_VALUE = 0;

const App = () => {
  const [counter, setCounter] = useState(INIT_VALUE); //Destructuring

  /*
    No destructuring way
    const counter = useState(0);
    const counterValue = counter[0];
    const setCounter = counter[1];
  */

  const incrementCounter = () => setCounter((prevCounter) => ++prevCounter);

  const decrementCounter = () => {
    if (counter <= 0) return;

    //setCounter(counter - 1); //No need to use prevCounter
    setCounter((prevCounter) => --prevCounter); //Safe way
  };

  const handleClick = (e) => {
    const { id } = e.target;

    if (id === "+") incrementCounter();
    else decrementCounter();
  };

  const resetCounter = () => setCounter(INIT_VALUE);

  const isEven = counter % 2 === 0;

  const message = isEven ? "Even" : "Odd";

  return (
    <div>
      <p>Counter: </p>
      <Counter counter={counter} />
      <small>{message}</small>
      <br />
      <button onClick={handleClick} id="+">
        +
      </button>
      <button onClick={decrementCounter} id="-">
        -
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
