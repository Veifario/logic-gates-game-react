import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
	HomePage,
	CreditsPage,
	GameFieldPage,
	LoadPage,
	NewGamePage,
	ParamsPage,
	TreePage,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/newgame" element={<NewGamePage />} />
				<Route path="/load" element={<LoadPage />} />
				<Route path="/params" element={<ParamsPage />} />
				<Route path="/credits" element={<CreditsPage />} />
				<Route exact path="/tree/:id" element={<TreePage/>}/>
				<Route exact path="/tree/:id/:id" element={<GameFieldPage/>}/>
			</Routes>
		</div>
	);
}

export default App;
