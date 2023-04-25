import React from "react";
import s from "./index.module.scss";
import Lvl from "./Lvl";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Map = () => {
	const lvls = useSelector((state) => state.progress.lvlsAccess);

	const displayLvls = () =>
		lvls.map(({ active }, index) => (
			<Lvl key={index} id={index + 1} active={active} />
		));

	return (
		<div className={s.root}>
			{displayLvls()}
			<ToastContainer />
		</div>
	);
};

export default Map;
