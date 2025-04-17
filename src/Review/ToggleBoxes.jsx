import React, { useState } from "react";

export default function ToggleBoxes() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRed, setIsRed] = useState(true);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const toggleColor = () => setIsRed((prev) => !prev);
  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <button onClick={toggleColor}>Toggle Color</button>

      {isVisible && (
        <div
          style={{
            margin: "16px",
            padding: "16px",
            backgroundColor: "lightgray",
          }}
        >
          I can be hidden btw
        </div>
      )}
      <div
        style={{
          margin: "16px",
          padding: "16px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
        }}
      >
        I can change Color
      </div>
    </div>
  );
}
