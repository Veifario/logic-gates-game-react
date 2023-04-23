import React, { useState } from "react";
import "./index.css";
import Box from "./components/Box";
import TopBar from "./components/TopBar";
import Xarrow from "./components/Xarrow";
import MenuWindow from "./components/MenuWindow";

const shapes = ["wideBox", "tallBox", "interfaceBox"];

const PlayGround = () => {
	const [interfaces, setInterfaces] = useState([
		{
			id: "static1",
			shape: "interfaceBox",
			type: "input",
		},
		{
			id: "static2",
			shape: "interfaceBox",
			type: "output",
		},
	]);

	const [boxes, setBoxes] = useState([]);
	const [lines, setLines] = useState([]);

	const [selected, setSelected] = useState(null);
	const [actionState, setActionState] = useState("Normal");

	const handleSelect = (e) => {
		if (e === null) {
			setSelected(null);
			setActionState("Normal");
		} else setSelected({ id: e.target.id, type: "box" });
	};

	const checkExsitence = (id) => {
		return [...boxes, ...interfaces].map((b) => b.id).includes(id);
	};

	const handleDropDynamic = (e) => {
		let shape = e.dataTransfer.getData("shape");
		if (shapes.includes(shape)) {
			let l = boxes.length;
			while (checkExsitence("box" + l)) l++;
			let { x, y } = e.target.getBoundingClientRect();
			var newName = prompt("Enter box name: ", "box" + l);
			if (newName) {
				let newBox = { id: newName, x: e.clientX - x, y: e.clientY - y, shape };
				setBoxes([...boxes, newBox]);
			}
		}
	};

	const handleDropStatic = (e) => {
		let shape = e.dataTransfer.getData("shape");
		if (shapes.includes(shape)) {
			let l = interfaces.length;
			while (checkExsitence("static" + l)) l++;
			let newName = prompt("Enter interface name: ", "static" + l);
			let d = { interfacesInputsBar: "input", interfacesOutputsBar: "output" };
			if (newName) {
				let newItr = { id: newName, shape, type: d[e.target.id] };
				setInterfaces([...interfaces, newItr]);
			}
		}
	};

	const props = {
		interfaces,
		setInterfaces,
		boxes,
		setBoxes,
		selected,
		handleSelect,
		actionState,
		setActionState,
		lines,
		setLines,
	};

	const boxProps = {
		boxes,
		setBoxes,
		selected,
		handleSelect,
		actionState,
		setLines,
		lines,
	};

	return (
		<div>
			<div
				className="canvasStyle"
				id="canvas"
				onClick={() => handleSelect(null)}
			>
				<div className="toolboxMenu">
					<div className="toolboxTitle">Drag & drop me!</div>
					<hr />
					<div className="toolboxContainer">
						{shapes.map((shapeName) => (
							<div
								key={shapeName}
								className={shapeName}
								onDragStart={(e) => e.dataTransfer.setData("shape", shapeName)}
								draggable
							>
								{shapeName}
							</div>
						))}
					</div>
				</div>
				<div
					className="interfacesBarStyle"
					onDragOver={(e) => e.preventDefault()}
					onDrop={handleDropStatic}
					id="interfacesInputsBar"
				>
					<u className="interfaceTitleStyle">inputs</u>
					{interfaces
						.filter((itr) => itr.type === "input")
						.map((itr) => (
							<Box
								{...boxProps}
								key={itr.id}
								box={{ ...itr, id: itr.id }}
								position="static"
								sidePos="left"
							/>
						))}
				</div>
				<div
					id="boxesContainer"
					className="boxesContainer"
					onDragOver={(e) => e.preventDefault()}
					onDrop={handleDropDynamic}
				>
					<TopBar {...props} />

					{boxes.map((box) => (
						<Box
							{...boxProps}
							key={box.id}
							box={box}
							position="absolute"
							sidePos="middle"
						/>
					))}
				</div>
				<div
					className="interfacesBarStyle"
					onDragOver={(e) => e.preventDefault()}
					onDrop={handleDropStatic}
					id="interfacesOutputsBar"
				>
					<u className="interfaceTitleStyle">outputs</u>
					{interfaces
						.filter((itr) => itr.type === "output")
						.map((itr) => (
							<Box
								{...boxProps}
								key={itr.id}
								box={{ ...itr, id: itr.id }}
								position="static"
								sidePos="right"
							/>
						))}
				</div>
				{lines.map((line, i) => (
					<Xarrow
						key={line.props.start + "-" + line.props.end + i}
						line={line}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
			</div>
		</div>
	);
};
export default PlayGround;