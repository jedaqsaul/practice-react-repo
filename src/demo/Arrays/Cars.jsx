import React, { useState } from "react";

export default function Cars() {
  const [cars, setCars] = useState([
    "BMW",
    "Lamborghini",
    "Porshe",
    "Mercedes",
    "Toyota",
    "Nissan",
    "Mazda",
  ]);

  const [newCar, setNewCar] = useState("");

  const handleAddCar = () => {
    if (newCar.trim()) {
      setCars([...cars, newCar]);
      setNewCar("");
    }
  };

  const handleChange = (event) => setNewCar(event.target.value);
  return (
    <div>
      <input
        type="text"
        placeholder="Add new Car"
        value={newCar}
        onChange={handleChange}
      />
      <button onClick={handleAddCar}>Add</button>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
    </div>
  );
}
