import React from "react";
import s from "./index.module.scss";
import andGate from "../../../../assets/gates/andGate.png";

const TipsForAndGate = () => {
	return (
		<div className={s.root}>
			<img src={andGate} alt="" />
			<table>
				<tbody>
					<tr>
						<th>A</th>
						<th>B</th>
						<th>A and B</th>
					</tr>
					<tr>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>0</td>
						<td>1</td>
						<td>0</td>
					</tr>
					<tr>
						<td>1</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TipsForAndGate;
