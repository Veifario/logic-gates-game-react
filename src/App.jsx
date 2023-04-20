import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import NewGamePage from "./pages/NewGamePage";
import GameFieldPage from "./pages/GameFieldPage";
import ParamsPage from "./pages/ParamsPage";
import LoadPage from "./pages/LoadPage";


import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/continue" element={<GameFieldPage />} />
        <Route path="/newgame" element={<NewGamePage />} />
        <Route path="/load" element={<LoadPage />} />
        <Route path="/params" element={<ParamsPage />} />
      </Routes>
    </div>
  );
}

export default App;
