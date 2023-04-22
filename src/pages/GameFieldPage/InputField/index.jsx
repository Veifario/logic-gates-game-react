import React from "react";
import s from "./index.module.scss";
import ArrowDot from "../../../components/ArrowDot";
import { useDispatch, useSelector } from "react-redux";
import { addArrowEnd, addArrowStart } from "../../../redux/actions";

const InputField = () => {
	const { inputs } = useSelector((state) => state.game.lvlLogic);
	const settings = useSelector(
		(state) => state.game.connectionSettings.selectedGate
	);
	const dispatch = useDispatch();

	const handleArrowAdd = (id, output) => {
		if (settings === id) return;
		if (settings === "") dispatch(addArrowStart(id, output));
	};

	const displayInputs = () =>
		inputs?.map((e, index) => (
			<ArrowDot
				id={`input${index}`}
				style={{ position: "initial" }}
				key={index}
				active={e}
				type="output"
				onClick={() => handleArrowAdd(`input${index}`, e)}
			/>
		));

	return <div className={s.root}>{displayInputs()}</div>;
};

export default InputField;
