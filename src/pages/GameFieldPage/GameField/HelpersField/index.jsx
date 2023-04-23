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
			<div className={s.clearBtns}>
				<Button onClick={() => dispatch(clearArrows())}>Clear Arrows</Button>
				<Button>Clear All</Button>
			</div>
		</div>
	);
};

export default HelpersField;
