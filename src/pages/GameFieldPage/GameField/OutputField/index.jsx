import React from "react";
import s from "./index.module.scss";
import ArrowDot from "../../../../components/ArrowDot";
import { useDispatch, useSelector } from "react-redux";
import { addArrowEnd } from "../../../../redux/actions";

const OutputField = () => {
	const dispatch = useDispatch();
	const settings = useSelector(
		(state) => state.game.connectionSettings.selectedGate
	);
	const { output } = useSelector((state) => state.game.lvlLogic);

	const handleArrowEnd = async (id) => {
		if (settings === "") return;
		else dispatch(addArrowEnd(id));
	};

	return (
		<div className={s.root}>
			<ArrowDot
				id="output"
				style={{ position: "initial" }}
				type="input"
				active={output}
				onClick={() => handleArrowEnd("output")}
			/>
		</div>
	);
};

export default OutputField;
