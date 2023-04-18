import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import ContinuePage from "./pages/ContinuePage";
import NewGamePage from "./pages/NewGamePage";
import GameFieldPage from "./pages/GameFieldPage";
import PlayGround from "./Playground";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<AdminPage />} />
				<Route path="/continue" element={<GameFieldPage />} />
				<Route path="/newgame" element={<NewGamePage />} />
				<Route path="/test" element={<PlayGround />} />
			</Routes>
		</div>
	);
}

export default App;
