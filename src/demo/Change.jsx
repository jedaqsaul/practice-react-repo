import React from "react";

export default function Change() {
  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };
  return (
    <>
      <input name="search" onChange={handleChange} />
      <select name="filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
      </select>
    </>
  );
}
