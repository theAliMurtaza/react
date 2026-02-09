import React from 'react';

function ThemeToggle({ toggleTheme, theme }) {
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeToggle;
