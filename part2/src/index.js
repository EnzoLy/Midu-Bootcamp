import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const INIT_COUNTER_STATE = {
  left: 0,
  right: 0,
  message: "test",
}

const NotUsed = () => <p>Not used</p>;

const ListOfClicks = ({ clicks }) => <p>Type of click: {clicks.join(", ")}</p>;

const App = () => {
  //Object in state
  const [counters, setCounters] = useState(INIT_COUNTER_STATE);

  const [clicks, setClicks] = useState([]);

  //spread operator
  const handleLeftClick = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
    });
    setClicks([...clicks, "L"]);
  };

  //spread operator safe way
  const handleRightClick = () => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      right: prevCounters.right + 1,
    }));

    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {

    setCounters(INIT_COUNTER_STATE);

    setClicks([]);

  };

  return (
    <div>
      {counters.left}
      <button onClick={handleLeftClick}>+</button>
      <button onClick={handleRightClick}>+</button>
      {counters.right}
      <p>Message: {counters.message}</p>
      <p>Total Clicks: {clicks.length}</p>
      {
        clicks.length === 0 ? 
          (<NotUsed />) 
          :
          (<ListOfClicks clicks={clicks} />)
      }
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
