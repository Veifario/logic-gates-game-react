import React, { useEffect } from "react";
import s from "./index.module.scss";
import InputField from "./InputField";
import OutputField from "./OutputField";
import Loader from "../../components/Loader";
import { Xwrapper } from "react-xarrows";
import { useDispatch, useSelector } from "react-redux";
import { fetchLvlLogic, fetchLvlLogicDone } from "../../redux/actions";
import { getLvlLogic } from "../../api/getRequest";
import GatesField from "./GatesField";
import ArrowsField from "./ArrowsField";
import HelpersField from "./HelpersField";

const GameFieldPage = () => {
	let lvl = 3;
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
			<InputField />
			<Xwrapper>
				<GatesField />
				<ArrowsField />
			</Xwrapper>
			<OutputField />
			<HelpersField />
		</div>
	);
};

export default GameFieldPage;
