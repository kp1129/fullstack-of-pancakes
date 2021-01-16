import React from "react";
import { useDarkMode } from './useDarkMode';

// darkMode is DISABLED by default
function ModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const handleClick = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="modeToggle">
      <div
        onClick={handleClick}
        className={darkMode ? "toggle toggled" : "toggle"}
      ></div>
    </div>
  );
}

export default ModeToggle;