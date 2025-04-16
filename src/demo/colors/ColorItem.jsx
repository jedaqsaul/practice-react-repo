import React from "react";

export default function ColorItem({ color }) {
  const students = ["Aquila", "Jedidiah", "Wafula"];
  return (
    <li style={{ color }}>
      {students.map((student) => (
        <h1 key={student}>{student}</h1>
      ))}
    </li>
  );
}
