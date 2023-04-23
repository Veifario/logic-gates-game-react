import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
	AdminPage,
	CreditsPage,
	GameFieldPage,
	LoadPage,
	NewGamePage,
	ParamsPage,
	TreePage
} from "./pages";

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
				<Route path="/tree" element={<TreePage/>}/>
			</Routes>
		</div>
	);
}

export default App;
