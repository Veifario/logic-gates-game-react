import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import NewGamePage from "./pages/NewGamePage";
import GameFieldPage from "./pages/GameFieldPage";
import ParamsPage from "./pages/ParamsPage";
import LoadPage from "./pages/LoadPage";
import PlayGround from "./Playground";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<AdminPage />} />
				<Route path="/continue" element={<GameFieldPage />} />
				<Route path="/newgame" element={<NewGamePage />} />
				<Route path="/test" element={<PlayGround />} />
				<Route path="/load" element={<LoadPage />} />
				<Route path="/params" element={<ParamsPage />} />
			</Routes>
		</div>
	);
}

export default App;
