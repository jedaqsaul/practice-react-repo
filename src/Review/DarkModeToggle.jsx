import React, { useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => setIsDarkMode((prev) => !prev);

  const appStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    transition: "0.8s ease-in-out",
  };

  const btnStyle = {
    backgroundColor: isDarkMode ? "#fff" : "#000",
    color: isDarkMode ? "#000" : "#fff",
    padding: "3px",
    transition: "0.8s ease-in-out",
  };
  return (
    <div style={appStyle}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleMode} style={btnStyle}>
        switch to {isDarkMode ? "Light" : "Dark"} mode
      </button>
    </div>
  );
}
