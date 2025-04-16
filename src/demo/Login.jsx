import React from "react";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" />
      <input type="password" name="password" />
      <button>Login</button>
    </form>
  );
}
