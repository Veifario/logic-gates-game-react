import React from "react";
import s from "./index.module.scss";

const DropdownItem = ({ text, ...props }) => {
	return (
		<div {...props} className={s.root}>
			<button className={s.item}>{text}</button>
		</div>
	);
};

export default DropdownItem;
