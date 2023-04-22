import React, { useState } from "react";
import s from "./index.module.scss";
import DropdownMenu from "..";
import Draggable from "react-draggable";

const DisplayDropdown = () => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<Draggable
			bounds={{ left: -500, top: 0, right: 10, bottom: 400 }}
			handle="strong"
		>
			<div className={s.root}>
				<strong>
					<button
						onClick={() => setIsOpened(!isOpened)}
						className={s.openBtn}
					></button>
				</strong>

				{isOpened && <DropdownMenu />}
			</div>
		</Draggable>
	);
};

export default DisplayDropdown;
