//Usereducer

import { useReducer } from "react";

function App() {
  let initialState = { a: 0, b: 0 };

  let reducer = (count, actions) => {
    switch (actions.type) {
      case "incrementA":
        return { ...count, a: count.a + actions.value };
      case "decrementA":
        return { ...count, a: count.a - actions.value };
      case "resetA":
        return { ...count, a: 0 };
      case "incrementB":
        return { ...count, b: count.b + actions.value };
      case "decrementB":
        return { ...count, b: count.b - actions.value };
      case "resetB":
        return { ...count, b: 0 };
    }
  };

  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Count of a: {count.a}</h1>
        <h1>Count of b: {count.b}</h1>
        <button onClick={() => dispatch({ type: "incrementA", value: 1 })}>
          increment a by 1
        </button>
        <button onClick={() => dispatch({ type: "incrementA", value: 5 })}>
          increment a by 5
        </button>
        <button onClick={() => dispatch({ type: "decrementA", value: 1 })}>
          decrement a by 1
        </button>
        <button onClick={() => dispatch({ type: "decrementA", value: 3 })}>
          decrement a by 3
        </button>
        <button onClick={() => dispatch({ type: "resetA" })}>reset a</button>
        {/* B Buttons */}
        <button onClick={() => dispatch({ type: "incrementB", value: 1 })}>
          increment b by 1
        </button>
        <button onClick={() => dispatch({ type: "incrementB", value: 5 })}>
          increment b by 5
        </button>
        <button onClick={() => dispatch({ type: "decrementB", value: 1 })}>
          decrement b by 1
        </button>
        <button onClick={() => dispatch({ type: "decrementB", value: 3 })}>
          decrement b by 3
        </button>
        <button onClick={() => dispatch({ type: "resetB" })}>reset b</button>
      </div>
    </>
  );
}

export default App;
