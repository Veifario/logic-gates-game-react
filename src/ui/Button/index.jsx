import React from "react";
import s from "./index.module.scss";

const Button = ({ children, ...props }) => {
	return (
		<div className={s.root} {...props}>
			{children}
		</div>
	);
};

export default Button;
