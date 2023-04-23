import React from "react";
import s from "./index.module.scss";
import { Xwrapper } from "react-xarrows";
import GatesField from "./GatesField";
import ArrowsField from "./ArrowsField";
import OutputField from "./OutputField";
import HelpersField from "./HelpersField";
import InputField from "./InputField";

const GameField = () => {
	return (
		<div className={s.root}>
			<InputField />
			<Xwrapper>
				<GatesField />
				<ArrowsField />
			</Xwrapper>
			<OutputField />
			<HelpersField />
		</div>
	);
};

export default GameField;
