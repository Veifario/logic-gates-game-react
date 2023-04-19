import React from "react";
import s from "./index.module.scss";
import notGate from "../../../../assets/gates/notGate.png";

const TipsForNotGate = () => {
	return (
		<div className={s.root}>
			<img src={notGate} alt="" />
			<table>
				<tbody>
					<tr>
						<th>A</th>
						<th>Not A</th>
					</tr>
					<tr>
						<td>0</td>
						<td>1</td>
					</tr>
					<tr>
						<td>1</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TipsForNotGate;
