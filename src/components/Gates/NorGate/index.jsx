import React, { useRef } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import {
	gateIndexIncrease,
	addArrowStart,
	addArrowEnd,
} from "../../../redux/actions";
import { useXarrow } from "react-xarrows";
import ArrowDot from "../../ArrowDot";

const NorGate = ({ id }) => {
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
	};

	const getOutputLogic = (input0, input1) => !(input0 || input1);

	return (
		<Draggable
			bounds="parent"
			onDrag={updateCoord}
			onStart={() => handleZindex(blockRef.current)}
		>
			<div id={id} className={s.root} ref={blockRef}>
				<ArrowDot
					type="input"
					onClick={handleArrowEnd}
					style={{ transform: "translate(70%)" }}
				/>
				<div className={s.tail}></div>
				<div className={s.head}></div>
				<div className={s.circle}></div>
				<ArrowDot
					active={getOutputLogic(0, 1)}
					type="output"
					onClick={handleArrowStart}
				/>
			</div>
		</Draggable>
	);
};

export default NorGate;
