import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? "dark" : "light";
  localStorage.setItem("theme", theme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    console.log(localTheme);
    if (localTheme) {
      if (localTheme === "light") {
        setDarkMode(false);
        localStorage.setItem("theme", theme);
      } else if (localTheme === "dark") {
        setDarkMode(true);
        localStorage.setItem("theme", theme);
      }
    }
    else{
      localStorage.setItem("theme", 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
