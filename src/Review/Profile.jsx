import React, { useState } from "react";

export default function Profile() {
  //   const [name, setName] = useState("Aquila");
  //   const [age, setAge] = useState(23);
  //   const [location, setLocation] = useState("Kenya");

  const [user, setUser] = useState({
    name: "Aquila",
    age: 23,
    location: "Kenya",
  });

  const handleChange = () =>
    setUser((prev) => ({
      ...prev,
      name: prev.name === "Aquila" ? "jedidiah" : "Aquila",
      age: prev.age + 2,
    }));
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age:{user.age}</p>
      <p>Location:{user.location}</p>

      <button onClick={handleChange}>Change age and Name</button>
    </div>
  );
}
