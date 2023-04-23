import React from "react";
import s from "./index.module.scss";

const Header = (props) => {
	return (
		<div className={s.root}>
			<button className={s.back} onClick={props.onBackButtonClick}>
				{/* <img src={backBtn} /> */}
			</button>

			<button className={s.brush}>
				{/* <img src={brush} /> */}
			</button>
		</div>
	);
};

export default Header;
