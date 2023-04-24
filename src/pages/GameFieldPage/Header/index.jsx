import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { useSelector } from "react-redux";
import { calcGatesAmount, lvlUp } from "../../../utils/index.js";
import { ToastContainer, toast } from "react-toastify";
import { lvlUpRequest } from "../../../api/updateRequest";

const Header = () => {
	// States
	const [color, setColor] = useState("#f4c430");
	const [lvlPassed, setLvlPassed] = useState(false);

	// Selectors
	const arrows = useSelector((state) => state.game.arrows);
	const { output, inputs, gates } = useSelector((state) => state.game.lvlLogic);
	// const { id, lvls } = useSelector(state.progres.userProgress);

	const handleColorChanging = (value) => {
		setColor(value);
		const root = document.querySelector(":root");
		root.style.setProperty("--gateColor", color);
		localStorage.setItem("gameColor", color);
	};

	const checkLocalStorage = () => {
		const root = document.querySelector(":root");
		root.style.setProperty("--gateColor", localStorage.getItem("gameColor"));

		const rootColor = localStorage.getItem("gameColor")
			? localStorage.getItem("gameColor")
			: root.style.getPropertyValue("--gateColor");
		setColor(rootColor);
	};

	const checkResultHandler = () => {
		const foundArrow = arrows.find(({ end }) => end === "output");

		if (arrows.length >= inputs.length + calcGatesAmount(gates)) {
			if (foundArrow?.output === output) finishLvl();
			else toast.warn("Incorrect ouput");
		} else toast.warn("You have not used all given gates or inputs");
	};

	const finishLvl = () => {
		// lvlUp(lvls)
		// lvlUpRequest(id, lvls)
		toast.success("Winner! Next level is available");
		setLvlPassed(true);
	};

	useEffect(() => {
		checkLocalStorage();
	}, []);

	return (
		<div>
			<div className={s.root}>
				<Link className={s.link} to="/">
					!open
				</Link>
				<input
					type="color"
					value={color}
					onChange={(e) => handleColorChanging(e.target.value)}
				/>
				<div className={s.btns}>
					<Button
						style={{
							backgroundColor: "#eed202",
							color: "black",
							display: !lvlPassed ? "initial" : "none",
						}}
						onClick={checkResultHandler}
					>
						Check Result
					</Button>
					<Button style={{ display: lvlPassed ? "initial" : "none" }}>
						Next Level
					</Button>
				</div>
			</div>
			<ToastContainer autoClose={2000} theme="dark" position="bottom-center" />
		</div>
	);
};

export default Header;
