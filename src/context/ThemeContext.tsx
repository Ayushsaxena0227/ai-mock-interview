import { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context
interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for user preference in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle theme and store in localStorage
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
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
