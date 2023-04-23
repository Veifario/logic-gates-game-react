import React, { useEffect, useState } from "react";
import s from "./index.module.scss";

const Header = (props) => {
	const [color, setColor] = useState("red");

	const handleColorChanging = (value) => {
		setColor(value);
		const root = document.querySelector(":root");
		root.style.setProperty("--gateColor", color);
		
	};

	const checkLocalStorage = () => {};

	useEffect(() => {
		localStorage.getItem("gameColor");
	}, []);

	return (
		<div className={s.root}>
			<button className={s.back} onClick={props.onBackButtonClick}>
				{/* <img src={backBtn} /> */}
			</button>
			<input
				type="color"
				value={color}
				onChange={(e) => handleColorChanging(e.target.value)}
			/>
			<button className={s.brush}>{/* <img src={brush} /> */}</button>
		</div>
	);
};

export default Header;
