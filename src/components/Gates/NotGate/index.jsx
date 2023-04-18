import React, { useRef, useState } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { gateIndexIncrease } from "../../../redux/actions";
import { gateArrowStart } from "../../../redux/actions";
import { useXarrow } from "react-xarrows";

const NotGate = ({ id }) => {
	const updateCoord = useXarrow();

	// Arrow Coordinates
	const startCoord = useSelector((state) => state.game.gateArrowStart);
	const endCoord = useSelector((state) => state.game.gateArrowEnd);

	// Z-Index changer
	const index = useSelector((state) => state.game.gateZIndex);
	const dispatch = useDispatch();

	const blockRef = useRef(null);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	return (
		<Draggable
			bounds="parent"
			onDrag={updateCoord}
			onStart={() => handleZindex(blockRef.current)}
			onStop={updateCoord}
		>
			<div
				id={id}
				className={s.root}
				ref={blockRef}
				onClick={() => dispatch(gateArrowStart(blockRef))}
			>
				<div className={s.triangle}></div>
				<div className={s.circle}></div>
			</div>
		</Draggable>
	);
};
export default NotGate;
