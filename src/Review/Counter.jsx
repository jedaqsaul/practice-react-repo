import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrease = () =>
    setCount((prev) => (prev >= 10 ? prev : prev + 1));

  function handleDecrease() {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
