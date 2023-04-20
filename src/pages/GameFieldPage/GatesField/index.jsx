import React from "react";
import { useSelector } from "react-redux";
import {
	AndGate,
	NandGate,
	NorGate,
	NotGate,
	OrGate,
} from "../../../components/Gates";

const GatesField = () => {
	const { gates } = useSelector((state) => state.game.lvlLogic);

	const displayGates = () => {
		const gatesList = [];
		for (const gate in gates) {
			switch (gate) {
				case "and":
					for (let i = 0; i < gates[gate]; i++)
						gatesList.push(<AndGate id={`and${i}`} />);
					break;
				case "or":
					for (let i = 0; i < gates[gate]; i++)
						gatesList.push(<OrGate id={`or${i}`} />);
					break;
				case "not":
					for (let i = 0; i < gates[gate]; i++)
						gatesList.push(<NotGate id={`not${i}`} />);
					break;
				case "nor":
					for (let i = 0; i < gates[gate]; i++)
						gatesList.push(<NorGate id={`nor${i}`} />);
					break;
				case "nand":
					for (let i = 0; i < gates[gate]; i++)
						gatesList.push(<NandGate id={`nand${i}`} />);
					break;
			}
		}
		return gatesList.map((e, index) => (
			<React.Fragment key={index}>{e}</React.Fragment>
		));
	};

	return <React.Fragment>{displayGates()}</React.Fragment>;
};

export default GatesField;
