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
import InteractiveBackround from "./components/InteractiveBackround";

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
				<Route path="back" element={<InteractiveBackround />} />
			</Routes>
		</div>
	);
}

export default App;
