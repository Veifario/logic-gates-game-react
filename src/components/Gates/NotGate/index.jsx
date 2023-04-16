import React, { useRef, useState } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { gateIndexIncrease } from "../../../redux/actions";
import Xarrows from "react-xarrows";
import { gateArrowStart } from "../../../redux/actions";

const NotGate = () => {
	// Arrow Coordinates
	const startCoord = useSelector((state) => state.game.gateArrowStart);
	const endCoord = useSelector((state) => state.game.gateArrowStart);

	// Z-Index changer
	const index = useSelector((state) => state.game.gateZIndex);
	const dispatch = useDispatch();

	const blockRef = useRef(null);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	return (
		<Draggable bounds="parent" onStart={() => handleZindex(blockRef.current)}>
			<div
				className={s.root}
				ref={blockRef}
				onClick={() => dispatch(gateArrowStart(blockRef))}
			>
				<div className={s.triangle}></div>
				<div className={s.circle}></div>
				<Xarrows start={startCoord} end={endCoord} />
			</div>
		</Draggable>
	);
};
export default NotGate;
