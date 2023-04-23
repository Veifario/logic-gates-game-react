import React from "react";
import s from "./index.module.scss";
import GatesMirror from "./GatesMirror";

const Sidebar = () => {
	return (
		<div className={s.root}>
			<GatesMirror />
		</div>
	);
};

export default Sidebar;
