import React, { useEffect } from "react";
import s from "./index.module.scss";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import GameField from "./GameField";
import {
	exactUser,
	fetchLvlLogic,
	fetchLvlLogicDone,
	lvlsAccessFetch,
} from "../../redux/actions";
import { getById, getLvlLogic } from "../../api/getRequest";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLocation, useParams } from "react-router-dom";

const GameFieldPage = () => {
	const params = useParams();
	const location = useLocation();

	const dispatch = useDispatch();
	const loading = useSelector((state) => state.game.loading);

	const getLvl = async () => {
		const userId = location.pathname.split("/");
		try {
			dispatch(fetchLvlLogic());
			const data = await getLvlLogic(params.id);
			dispatch(fetchLvlLogicDone(data));
			const anotherData = await getById(userId[2]);
			dispatch(exactUser(anotherData));
			dispatch(lvlsAccessFetch(anotherData.lvls));
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
