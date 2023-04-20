import React from "react";
import s from "./index.module.scss";

const ArrowDot = ({ type, active, id, ...props }) => {
	const classNameArr = [s[type]];
	if (active) classNameArr.push(s.active);

	return id ? (
		<div {...props} id={id} className={classNameArr.join(" ")}></div>
	) : (
		<div {...props} className={classNameArr.join(" ")}></div>
	);
};

export default ArrowDot;
