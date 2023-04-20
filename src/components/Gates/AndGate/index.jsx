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

	const handleArrowEnd = () => {
		if (settings === "") return;
		else dispatch(addArrowEnd(id));
	};
	const handleArrowStart = () => {
		if (settings === id) return;
		if (settings === "") dispatch(addArrowStart(id));
		else dispatch(addArrowEnd(id));
	};

	const getOutputLogic = (input0, input1) => input0 && input1;

	return (
		<Draggable
			bounds="parent"
			onDrag={updateCoord}
			onStart={() => handleZindex(blockRef.current)}
			onStop={updateCoord}
		>
			<div id={id} className={s.root} ref={blockRef}>
				<ArrowDot
					type="input"
					onClick={handleArrowEnd}
					style={{ transform: "translate(-50%)" }}
				/>
				<div className={s.body}></div>
				<ArrowDot
					active={getOutputLogic(1, 1)}
					type="output"
					onClick={handleArrowStart}
					style={{ transform: "translate(-48%)" }}
				/>
			</div>
		</Draggable>
	);
};

export default AndGate;
