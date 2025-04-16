import React, { useState } from "react";

export default function StudentNames() {
  const [names, setNames] = useState([
    "Aquila",
    "Erick",
    "Hope",
    "Kamau",
    "Njeri",
  ]);

  const removeStudent = (nameToRemove) => {
    setNames(names.filter((name) => name !== nameToRemove));
  };
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <button onClick={() => removeStudent(name)}>X {name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
