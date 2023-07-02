import { useState } from "react";

const U2 = () => {
  let [count, setCount] = useState({ a: 0 });

  return (
    <>
      <div>
        <h1>{count.a}</h1>
        <button>Increment 1</button>
        <button>Increment 5</button>
        <button>Decrement 1</button>
        <button>Increment 3</button>
        <button>reset</button>
      </div>
    </>
  );
};

export default U2;
