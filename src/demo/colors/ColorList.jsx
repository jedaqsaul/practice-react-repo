import React from "react";
import ColorItem from "./ColorItem";

export default function ColorList() {
  const colors = ["red", "blue", "yellow"];
  return (
    <div>
      <h1>Students with their favourite colors</h1>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </div>
  );
}
