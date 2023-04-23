import React from "react";
import s from "./index.module.scss";
import DisplayDropdown from "../../../../components/DropdownMenu/DisplayDropdown";
import Button from "../../../../ui/Button";
import { clearArrows } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

const HelpersField = () => {
	const dispatch = useDispatch();

	return (
		<div className={s.root}>
			<DisplayDropdown />
			<Button
				style={{ ...clearBtnStyle }}
				onClick={() => dispatch(clearArrows())}
			>
				Clear Arrows
			</Button>
		</div>
	);
};

const clearBtnStyle = {
	position: "absolute",
	bottom: 10,
	right: 10,
};

export default HelpersField;
