import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
	const [color, setColor] = useState("#f4c430");

	const handleColorChanging = (value) => {
		setColor(value);
		const root = document.querySelector(":root");
		root.style.setProperty("--gateColor", color);
		localStorage.setItem("gameColor", color);
	};

	const checkLocalStorage = () => {
		const root = document.querySelector(":root");
		root.style.setProperty("--gateColor", localStorage.getItem("gameColor"));
		setColor(localStorage.getItem("gameColor"));
	};

	useEffect(() => {
		checkLocalStorage();
	}, []);

	return (
		<div className={s.root}>
			<Link className={s.link} to="/">
				!open
			</Link>
			<input
				type="color"
				value={color}
				onChange={(e) => handleColorChanging(e.target.value)}
			/>
		</div>
	);
};

export default Header;
