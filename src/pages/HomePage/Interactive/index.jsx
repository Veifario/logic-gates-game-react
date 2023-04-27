import React from "react";
import { useState } from "react";
import s from "./index.module.scss";
import Monitor from "./Monitor";

const Interactive = () => {
	const [switcherState, setSwitcherState] = useState("white");
	const [leverState, setLeverState] = useState("red");

	const [firstLineShadow, setFirstLineShadow] = useState("none");
	const [firstLineColor, setFirstLineColor] = useState("white");

	const [lineShadow, setLineShadow] = useState("none");
	const [lineColor, setLineColor] = useState("white");

	const [lampShadow, setLampShadow] = useState("none");
	const [lampColor, setLampColor] = useState("transparent");
	const [monitorText, setMonitorText] = useState("black");

	const changeMonitorTextColor = () => {
		if (monitorText === "black") {
			setMonitorText("green");
		} else setMonitorText("black");
	};

	// Switcher changer
	const switcherChanger = () => {
		if (switcherState === "white") {
			setSwitcherState("green");
			setFirstLineColor("rgb(135, 196, 155)");
			setFirstLineShadow("0 0 25px 0 rgba(193, 214, 168, 0.81)");
		} else {
			setSwitcherState("white");
			setFirstLineColor("white");
			setFirstLineShadow("none");
		}
	};

	// Lamp color/shadow changers
	const colorChanger = () => {
		if (lampColor === "transparent") {
			setLampColor("yellow");
		} else setLampColor("transparent");
	};

	const shadowChanger = () => {
		if (lampShadow === "none") {
			setLampShadow("0 0 10px 2px rgba(255,255,0,.7)");
		} else setLampShadow("none");
	};

	// Line color/shadow changers
	const lineColorChanger = () => {
		if (lineColor === "white") {
			setLineColor("rgb(135, 196, 155)");
		} else setLineColor("white");
	};
	const lineShadowChanger = () => {
		if (lineShadow === "none") {
			setLineShadow("0 0 25px 0 rgba(193, 214, 168, 0.81)");
		} else setLineShadow("none");
	};

	const leverLogic = () => {
		if (leverState === "blue") {
			setLeverState("red");
			if (switcherState === "green") {
				colorChanger();
				shadowChanger();
				lineColorChanger();
				lineShadowChanger();
				changeMonitorTextColor();
			}
		} else {
			setLeverState("blue");
			if (switcherState === "green") {
				colorChanger();
				shadowChanger();
				lineColorChanger();
				lineShadowChanger();
				changeMonitorTextColor();
			}
		}
	};

	return (
		<div className={s.root}>
			<button
				onClick={() => {
					if (leverState === "blue") {
						colorChanger();
						shadowChanger();
						lineColorChanger();
						lineShadowChanger();
						switcherChanger();
						changeMonitorTextColor();
					} else switcherChanger();
				}}
				style={{ backgroundColor: switcherState }}
				className={s.switcher}
			></button>
			<button
				style={{ backgroundColor: leverState }}
				onClick={() => {
					leverLogic();
				}}
				className={s.lever}
			></button>
			<div
				className={s.line0}
				style={{ borderColor: firstLineColor, boxShadow: firstLineShadow }}
			></div>
			<div
				className={s.line1}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line2}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line3}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line4}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line5}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line6}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div
				className={s.line7}
				style={{ borderColor: lineColor, boxShadow: lineShadow }}
			></div>
			<div id="pointer" className={s.pointer}></div>
			<div
				id="lamp"
				className={s.lamp}
				style={{ backgroundColor: lampColor, boxShadow: lampShadow }}
			></div>
			<div
				id="lamp2"
				className={s.lamp2}
				style={{ backgroundColor: lampColor, boxShadow: lampShadow }}
			></div>

			<Monitor monitorText={monitorText} />
		</div>
	);
};

export default Interactive;
