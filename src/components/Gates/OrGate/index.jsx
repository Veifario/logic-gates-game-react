import React, { useRef, useState } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import {
	addArrowEnd,
	addArrowStart,
	gateIndexIncrease,
} from "../../../redux/actions";
import { useXarrow } from "react-xarrows";
import ArrowDot from "../../ArrowDot";

const OrGate = ({ id }) => {
	const updateCoord = useXarrow();

	// Arrow settings
	const settings = useSelector(
		(state) => state.game.connectionSettings.selectedGate
	);

	// Z-Index changer
	const index = useSelector((state) => state.game.gateZIndex);
	const dispatch = useDispatch();

	const blockRef = useRef(null);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	const handleArrowAdd = () => {
		if (settings === id) return;
		if (settings === "") dispatch(addArrowStart(id));
		else dispatch(addArrowEnd(id));
	};

	return (
		<Draggable
			bounds="parent"
			onDrag={updateCoord}
			onStart={() => handleZindex(blockRef.current)}
			onStop={updateCoord}
		>
			<div id={id} className={s.root} ref={blockRef} >
				<ArrowDot type="input" onClick={handleArrowAdd} style={{transform: "translate(60%)"}}/>
				<div className={s.tail}></div>
				<div className={s.head}></div>
				<ArrowDot type="output" onClick={handleArrowAdd} style={{transform: "translate(20%)"}} />
			</div>
		</Draggable>
	);
};

export default OrGate;
