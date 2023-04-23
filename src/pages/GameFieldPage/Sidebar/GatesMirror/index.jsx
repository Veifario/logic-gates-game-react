import React from "react";
import s from "./index.module.scss";
import ArrowDot from "../../../../components/ArrowDot";

const GatesMirror = () => {
	return (
		<div className={s.root}>
			{/* NOT Gate */}
			<div className={s.not}>
				<ArrowDot
					type="input"
					style={{ top: 23, transform: "translate(-50%)", cursor: "no-drop" }}
				/>
				<div className={s.triangle}></div>
				<ArrowDot
					type="output"
					style={{ top: 23, transform: "translate(20%)", cursor: "no-drop" }}
				/>
				<div className={s.circle}></div>
			</div>
			{/* OR Gate */}
			<div className={s.or}>
				<ArrowDot
					type="input"
					style={{ transform: "translate(60%)", cursor: "no-drop" }}
				/>
				<div className={s.tail}></div>
				<div className={s.head}></div>
				<ArrowDot
					type="output"
					style={{ transform: "translate(20%)", cursor: "no-drop" }}
				/>
			</div>
			{/* AND Gate */}
			<div className={s.and}>
				<ArrowDot
					type="input"
					style={{ transform: "translate(-50%)", cursor: "no-drop" }}
				/>
				<div className={s.body}></div>
				<ArrowDot
					type="output"
					style={{ transform: "translate(-48%)", cursor: "no-drop" }}
				/>
			</div>
			{/* NOR Gate */}
			<div className={s.nor}>
				<ArrowDot
					type="input"
					style={{ transform: "translate(70%)", cursor: "no-drop" }}
				/>
				<div className={s.tail}></div>
				<div className={s.head}></div>
				<div className={s.circle}></div>
				<ArrowDot type="output" style={{ cursor: "no-drop" }} />
			</div>

			{/*  NAND Gate */}
			<div className={s.nand}>
				<ArrowDot
					type="input"
					style={{ transform: "translate(-50%)", cursor: "no-drop" }}
				/>
				<div className={s.body}></div>
				<div className={s.circle}></div>
				<ArrowDot
					type="output"
					style={{ transform: "translate(20%)", cursor: "no-drop" }}
				/>
			</div>
		</div>
	);
};

export default GatesMirror;
