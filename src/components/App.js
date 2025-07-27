import React, { useState } from "react";
import "../index.css"; // Make sure styles are applied

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={appClass}>
      <button onClick={handleClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
