import React, { useState } from "react";
import Draggable from "react-draggable";
import "./MenuWindow.css";

export default ({ setLines, line: { props: lineProp } }) => {


	return (
		<Draggable>
			<div className="menuWindowContainer">
				<div className={"header"}>{`${lineProp.root}->${lineProp.end}`}</div>
				<hr style={{ width: "80%" }} />
				<div style={{ width: "80%", margin: "auto" }}>
					you are welcome to edit this example and add UI for editing the
					properties dynamically. PRs are very welcomed.
				</div>
			</div>
		</Draggable>
	);
};
