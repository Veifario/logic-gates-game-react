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

const NandGate = ({ id }) => {
	const updateCoord = useXarrow();

	// Arrow settings
	const settings = useSelector(
		(state) => state.game.connectionSettings.selectedGate
	);

	const arrows = useSelector((state) => state.game.arrows);

	const getGateArrow = () => {
		const foundArrow = arrows.filter(({ end }) => end === id);
		return foundArrow;
	};

	// Z-Index changer
	const index = useSelector((state) => state.game.gateZIndex);
	const dispatch = useDispatch();

	const blockRef = useRef(null);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	const handleArrowEnd = () => {
		if (getGateArrow().length >= 2) return;
		if (
			settings === getGateArrow()[0]?.start ||
			settings === getGateArrow()[1]?.start
		)
			return;
		if (settings === id) return;
		if (settings === "") return;
		else dispatch(addArrowEnd(id));
	};
	const handleArrowStart = () => {
		if (getGateArrow().length === 2) {
			if (settings === "")
				dispatch(
					addArrowStart(
						id,
						getOutputLogic(
							getGateArrow()?.[0]?.output,
							getGateArrow()?.[1]?.output
						)
					)
				);
		}
	};

	const getOutputLogic = (input0, input1) => {
		if (input0 !== undefined && input1 !== undefined)
			return typeof input0 === "number" ? +!(input0 && input1) : false;
	};

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
				<div className={s.circle}></div>
				<ArrowDot
					active={getOutputLogic(
						getGateArrow()?.[0]?.output,
						getGateArrow()?.[1]?.output
					)}
					type="output"
					onClick={handleArrowStart}
					style={{ transform: "translate(20%)" }}
				/>
			</div>
		</Draggable>
	);
};

export default NandGate;
