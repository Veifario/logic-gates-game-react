import React, { useEffect } from "react";
import s from "./index.module.scss";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import GameField from "./GameField";
import { fetchLvlLogic, fetchLvlLogicDone } from "../../redux/actions";
import { getLvlLogic } from "../../api/getRequest";
import Header from "./Header";
import Sidebar from "./Sidebar";

const GameFieldPage = () => {
	let lvl = 1;
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.game.loading);

	const getLvl = async () => {
		try {
			dispatch(fetchLvlLogic());
			const data = await getLvlLogic(lvl);
			dispatch(fetchLvlLogicDone(data));
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getLvl();
	}, []);

	return loading ? (
		<Loader />
	) : (
		<div className={s.root}>
			<Header />
			<GameField />
			<Sidebar />
		</div>
	);
};

export default GameFieldPage;
