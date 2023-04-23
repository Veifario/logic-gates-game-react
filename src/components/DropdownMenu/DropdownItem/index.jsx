import React from "react";
import s from "./index.module.scss";

const DropdownItem = ({ text, ...props }) => {
	return (
		<button {...props} className={s.root}>
			{text}
		</button>
	);
};

export default DropdownItem;
