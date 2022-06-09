import React from "react";
import "./State.css";
const State = ({ state, onClickStateHandler }) => {
  return (
    <div className="state" onClick={() => onClickStateHandler(state)}>
      <img src={`/StatesImages/${state}.jpg`} alt={state} />
      <p>{state}</p>
    </div>
  );
};

export default State;
