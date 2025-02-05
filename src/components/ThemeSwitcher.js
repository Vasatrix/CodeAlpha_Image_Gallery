import React from 'react';
import './ThemeSwitcher.css';

function ThemeSwitcher({ darkMode, setDarkMode }) {
  return (
    <div className="theme-switcher">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prevMode) => !prevMode)}
        />
        <span className="slider" />
        <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
