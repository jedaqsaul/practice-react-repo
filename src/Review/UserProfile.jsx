import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("Aquila");
  const [age, setAge] = useState(24);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);
  const increaseAge = () => setAge((prev) => prev + 1);
  const changeName = () =>
    setName((prev) => (prev === "Aquila" ? "Jedidiah" : "Aquila"));
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back" : "Please Log in"}</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
