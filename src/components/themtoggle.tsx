import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { darkMode, setDarkMode } = theme;

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
