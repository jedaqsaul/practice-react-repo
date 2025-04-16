import React, { useState } from "react";

export default function CounterTest() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showCount = () => {
    setCount((prev) => prev + 1);
  };
  const toggleTitle = () => setIsVisible((prev) => !prev);
  return (
    <div>
      <h1>{isVisible && <p>React hooks</p>}</h1>
      <button onClick={showCount}>Increase by One</button>
      <h1>{count}</h1>
      <button onClick={toggleTitle}>
        {isVisible ? "Hide Title" : "Show Title"}
      </button>
    </div>
  );
}
