import React, { useState } from "react";
import s from "./index.module.scss";
import AndGate from "../../components/Gates/AndGate";
import NandGate from "../../components/Gates/NandGate";
import OrGate from "../../components/Gates/OrGate";
import NotGate from "../../components/Gates/NotGate";
import NorGate from "../../components/Gates/NorGate";
import Xarrow, { Xwrapper } from "react-xarrows";
import DisplayDropdown from "../../components/DropdownMenu/DisplayDropdown";
import { useDispatch, useSelector } from "react-redux";
import { removeArrow } from "../../redux/actions";

const gates = { and: 1, or: 2, not: 1, nor: 1, nand: 0 };

const GameFieldPage = () => {
	const dispatch = useDispatch();
	const arrows = useSelector((state) => state.game.arrows);

	const deleteArrow = (arg) => {
		const arrowsList = [
			...arrows.filter(
				({ start, end }) => start !== arg.start || end !== arg.end
			),
		];
		dispatch(removeArrow(arrowsList));
	};

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

	const displayArrows = () =>
		arrows.map(({ start, end }, index) => (
			<Xarrow
				key={index}
				zIndex={3000}
				start={start}
				end={end}
				endAnchor={"left"}
				startAnchor={"right"}
				passProps={{
					onClick: () => {
						if (window.confirm("Do u wanna delete this arrow?"))
							deleteArrow({ start, end });
						else console.log("Not deleted");
					},
				}}
			/>
		));

	return (
		<div className={s.root} >
			<Xwrapper>
				{displayGates()}
				{displayArrows()}
			</Xwrapper>
			<DisplayDropdown />
		</div>
	);
};

export default GameFieldPage;
