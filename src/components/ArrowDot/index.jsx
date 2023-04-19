import React from "react";
import s from "./index.module.scss";

const ArrowDot = ({ type, ...props }) => {
	return <div {...props} className={s[type]}></div>;
};

export default ArrowDot;
