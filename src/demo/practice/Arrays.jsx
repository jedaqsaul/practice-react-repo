import React from "react";

export default function Arrays() {
  const colors = ["firebrick", "green", "blue"];
  return (
    <div>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </div>
  );
}
