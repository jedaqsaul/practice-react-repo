import React, { useState } from "react";

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <p>You are on the Home tab.</p>;
      case "Profile":
        return <p>Welcome to your Profile page!</p>;
      case "Settings":
        return <p>Adjust your Settings here.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button
          style={{
            backgroundColor: activeTab === "Home" ? "#4caf50" : "#eee",
            marginRight: "5px",
          }}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </button>
        <button
          style={{
            backgroundColor: activeTab === "Profile" ? "#4caf50" : "#eee",
            marginRight: "5px",
          }}
          onClick={() => setActiveTab("Profile")}
        >
          Profile
        </button>
        <button
          style={{
            backgroundColor: activeTab === "Settings" ? "#4caf50" : "#eee",
          }}
          onClick={() => setActiveTab("Settings")}
        >
          Settings
        </button>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
}
