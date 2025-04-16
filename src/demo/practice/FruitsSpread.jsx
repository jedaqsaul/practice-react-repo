import React, { useState } from "react";

export default function FruitsSpread() {
  const [fruits, setFruits] = useState([
    "mango,",
    "orange",
    "apple",
    "avocado",
    "guava",
  ]);

  const [newFruit, setNewFruit] = useState("");

  const handleAdd = () => {
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  const handleChange = (event) => setNewFruit(event.target.value);
  return (
    <div>
      <h2>Add you favourite fruit</h2>
      <input
        value={newFruit}
        onChange={handleChange}
        placeholder="Enter a fruit"
      />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
