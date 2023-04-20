import React, { useState } from "react";
import s from "./index.module.scss";
import DropdownItem from "./DropdownItem";
import {
	TipsForAndGate,
	TipsForNandGate,
	TipsForNorGate,
	TipsForNotGate,
	TipsForOrGate,
} from "./Tips";

const data = [
	{ id: 1, text: "Not gate" },
	{ id: 2, text: "And gate" },
	{ id: 3, text: "Or gate" },
	{ id: 4, text: "Nand gate" },
	{ id: 5, text: "Nor gate" },
];

const DropdownMenu = () => {
	const [specificTable, setSpecificTable] = useState("");

	const displaySpecificTable = () => {
		switch (specificTable) {
			case "Not gate":
				return <TipsForNotGate />;
			case "And gate":
				return <TipsForAndGate />;
			case "Or gate":
				return <TipsForOrGate />;
			case "Nand gate":
				return <TipsForNandGate />;
			case "Nor gate":
				return <TipsForNorGate />;
			default:
				return null;
		}
	};

	const displayItems = () =>
		data.map(({ id, text }) => {
			return (
				<DropdownItem
					onClick={() => setSpecificTable(text)}
					key={id}
					text={text}
				/>
			);
		});

	return (
		<div className={s.root}>
			{displaySpecificTable()}
			{displayItems()}
		</div>
	);
};

export default DropdownMenu;
