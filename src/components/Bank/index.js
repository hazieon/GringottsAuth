import React, { useReducer, useState } from "react";
import Profile from "../Profile";
import "./index.css";

let initialBalance = 0;

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return Number(state + action.payload);

    case "withdraw":
      return state - action.payload;

    default:
      return state;
  }
}

function Bank() {
  const [balance, dispatch] = useReducer(reducer, initialBalance);
  const [input, setInput] = useState(0);

  return (
    <div className="bank-container">
      <h1>Welcome to Gringotts Bank</h1>
      <Profile />

      <h2>{balance}</h2>
      <h3>{input}</h3>

      <input
        type="number"
        onChange={(e) => setInput(Number(e.target.value))}
        placeholder="gold transaction"
      />
      <button onClick={() => dispatch({ type: "deposit", payload: input })}>
        deposit
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: input })}>
        withdraw
      </button>
    </div>
  );
}

export default Bank;
