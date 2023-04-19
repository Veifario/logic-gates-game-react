import React, { useRef } from "react";
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

const AndGate = ({ id }) => {
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

	const handleArrowAdd = (e) => {
		// e.stopPropagation();
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
			<div id={id} className={s.root} ref={blockRef}>
				<ArrowDot type="input" onClick={handleArrowAdd} />
				<div className={s.body}></div>
				<ArrowDot type="output" onClick={handleArrowAdd} />
			</div>
		</Draggable>
	);
};

export default AndGate;
