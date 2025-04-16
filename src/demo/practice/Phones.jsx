import React, { useState } from "react";

export default function Phones() {
  const [newPhone, setNewPhone] = useState("");
  const [phones, setPhones] = useState(["oppo", "samsung", "redmi"]);

  const handleAddPhone = () => {
    setPhones([...phones, newPhone]);
    setNewPhone("");
  };

  const handleChange = (event) => setNewPhone(event.target.value);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter phone Name"
        value={newPhone}
        onChange={handleChange}
      />
      <button onClick={handleAddPhone}>Add phone Name</button>
      {phones.map((phone, index) => (
        <p key={index}>{phone}</p>
      ))}
    </div>
  );
}
