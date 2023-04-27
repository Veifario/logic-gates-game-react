import React from "react";
import s from "./index.module.scss";
import Lvl from "./Lvl";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Map = () => {
	const lvls = useSelector((state) => state.progress.lvlsAccess);

	const displayLvls = () =>
		lvls.map(({ active, className }, index, props) => (
			<Lvl key={index} id={index + 1} active={active} className={className} />
		));

	return (
		<div className={s.root}>
			<div className={s.container}>{displayLvls()}</div>
			<ToastContainer />
		</div>
	);
};

export default Map;
