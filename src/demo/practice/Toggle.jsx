import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((prev) => !prev);
  }
  const color = isOn ? "red" : "green";

  return (
    <>
      <button style={{ background: color }} onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </>
  );
}
