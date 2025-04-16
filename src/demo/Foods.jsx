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
      <h2 className="text-xl font-bold"></h2>
      <ul>
        {foods.map((food) => (
          <li key={food} className="text-green-600">
            {food}
          </li>
        ))}
      </ul>
    </div>
  );
}
