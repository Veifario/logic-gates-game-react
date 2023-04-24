import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
	AdminPage,
	CreditsPage,
	GameFieldPage,
	LoadPage,
	NewGamePage,
	ParamsPage,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<AdminPage />} />
				<Route path="/continue" element={<GameFieldPage />} />
				<Route path="/newgame" element={<NewGamePage />} />
				<Route path="/load" element={<LoadPage />} />
				<Route path="/params" element={<ParamsPage />} />
				<Route path="/credits" element={<CreditsPage />} />
			</Routes>
		</div>
	);
}

export default App;
