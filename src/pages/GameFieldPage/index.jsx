import React, { useState } from "react";
import s from "./index.module.scss";
import AndGate from "../../components/Gates/AndGate";
import NandGate from "../../components/Gates/NandGate";
import OrGate from "../../components/Gates/OrGate";
import NotGate from "../../components/Gates/NotGate";
import NorGate from "../../components/Gates/NorGate";

const GameFieldPage = () => {
	const [gateArrows, setGateArrows] = useState({
		start: "",
		end: "",
	});
	return (
		<div className={s.root}>
			<AndGate />
			<AndGate />
			<NandGate />
			<OrGate />
			<NorGate />
			<NotGate />
		</div>
	);
};

export default GameFieldPage;
