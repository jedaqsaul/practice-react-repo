import React, { useState } from "react";

export default function Foods() {
  const [foods, setFoods] = useState([
    "Githeri",
    "Chapo",
    "dengu",
    "waru",
    "fish",
  ]);

  const removeFood = (foodToRemove) => {
    setFoods(foods.filter((food) => food !== foodToRemove));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Click to remove food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <button
              className="text-red-600 hover:underline"
              onClick={() => removeFood(food)}
            >
              X {food}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
