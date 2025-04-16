import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount({ x: count.x + 1 });

    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
    // setCount((count) => count - 1);
  };

  return (
    <>
      <button onClick={decrement}>Decrease count</button>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>Increase count</button>
    </>
  );
}
