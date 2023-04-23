import React from "react";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import s from "./index.module.scss";

export const ThemeContext = createContext(null);

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className={s.root}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default DarkMode;
