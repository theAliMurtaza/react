import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-lightBg text-gray-900
        dark:bg-darkBg dark:text-gray-100
        transition-colors duration-300
      "
    >
      <div
        className="
          bg-white dark:bg-gray-800
          shadow-xl rounded-2xl
          p-8 w-[320px]
          text-center
          transition-colors duration-300
        "
      >
        <h1 className="text-2xl font-bold mb-4">
          Theme Toggler
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Switch between Light and Dark mode
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            w-full py-3 rounded-lg font-medium
            bg-gray-900 text-white
            dark:bg-gray-100 dark:text-gray-900
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}
