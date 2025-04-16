import React, { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p>This is some Text</p>}
    </div>
  );
}
