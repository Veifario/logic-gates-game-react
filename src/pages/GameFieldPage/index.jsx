import React, { useState } from "react";
import s from "./index.module.scss";
import AndGate from "../../components/Gates/AndGate";
import NandGate from "../../components/Gates/NandGate";
import OrGate from "../../components/Gates/OrGate";
import NotGate from "../../components/Gates/NotGate";
import NorGate from "../../components/Gates/NorGate";
import Xarrows from "react-xarrows";

const gates = { and: 1, or: 2, not: 1, nor: 1, nand: 0 };

const GameFieldPage = () => {
	const displayGatesAndArrows = () => {
		const gatesList = [];
		for (const gate in gates) {
			switch (gate) {
				case "and":
					for (let i = 0; i < gates[gate]; i++) {
						gatesList.push(
							<React.Fragment>
								<AndGate id={`and${i}`} />
								<Xarrows
									zIndex={3000}
									showXarrow={true}
									start={`and${i}`}
									end={"or1"}
								/>
							</React.Fragment>
						);
					}
					break;
				case "or":
					for (let i = 0; i < gates[gate]; i++) {
						gatesList.push(
							<React.Fragment>
								<OrGate id={`or${i}`} />
								<Xarrows
									zIndex={3000}
									showXarrow={false}
									start={`or${i}`}
									end={""}
								/>
							</React.Fragment>
						);
					}
					break;
				case "not":
					for (let i = 0; i < gates[gate]; i++) {
						gatesList.push(
							<React.Fragment>
								<NotGate id={`not${i}`} />
								<Xarrows
									zIndex={3000}
									showXarrow={false}
									start={`not${i}`}
									end={""}
								/>
							</React.Fragment>
						);
					}
					break;
				case "nor":
					for (let i = 0; i < gates[gate]; i++) {
						gatesList.push(
							<React.Fragment>
								<NorGate id={`nor${i}`} />
								<Xarrows
									zIndex={3000}
									showXarrow={false}
									start={`nor${i}`}
									end={""}
								/>
							</React.Fragment>
						);
					}
					break;
				case "nand":
					for (let i = 0; i < gates[gate]; i++) {
						gatesList.push(
							<React.Fragment>
								<NandGate id={`nand${i}`} />
								<Xarrows
									zIndex={3000}
									showXarrow={false}
									start={`nand${i}`}
									end={""}
								/>
							</React.Fragment>
						);
					}
					break;
			}
		}
		return gatesList.map((e, index) => (
			<React.Fragment key={index}>{e}</React.Fragment>
		));
	};

	return <div className={s.root}>{displayGatesAndArrows()}</div>;
};

export default GameFieldPage;
