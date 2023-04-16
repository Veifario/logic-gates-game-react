import React, { useRef, useState } from "react";
import s from "./index.module.scss";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { gateIndexIncrease } from "../../../redux/actions";

const OrGate = () => {
	const index = useSelector((state) => state.game.gateZIndex);
	const dispatch = useDispatch();

	const blockRef = useRef(null);

	const handleZindex = (element) => {
		element.style.zIndex = index + 1;
		dispatch(gateIndexIncrease());
	};

	return (
		<Draggable bounds="parent" onStart={() => handleZindex(blockRef.current)}>
			<div className={s.root} ref={blockRef}>
				<div className={s.tail}></div>
				<div className={s.head}></div>
			</div>
		</Draggable>
	);
};

export default OrGate;
