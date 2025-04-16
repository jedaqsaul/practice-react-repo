import React, { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState(["Learn React", "Write code"]);
  console.log(tasks); // why are they appearing two of them
  const addItem = () => setTasks((prev) => [...prev, "Take a break"]);
  const removeItem = () =>
    setTasks((prev) => prev.filter((task) => task !== "Take a break"));

  const updateItem = () =>
    setTasks((prev) =>
      prev.map((task) =>
        task === "Learn React" ? "Learn Advanced React" : task
      )
    );

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add to Array</button>
      <button onClick={removeItem}>Remove from Array</button>
      <button onClick={updateItem}>Update the Array</button>
    </div>
  );
}
