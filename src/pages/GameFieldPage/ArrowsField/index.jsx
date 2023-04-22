import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Xarrow from "react-xarrows";
import { removeArrow } from "../../../redux/actions";

const ArrowsField = () => {
	const arrows = useSelector((state) => state.game.arrows);
	const dispatch = useDispatch();

	const deleteArrow = (arg) => {
		const arrowsList = [
			...arrows.filter(
				({ start, end }) => start !== arg.start || end !== arg.end
			),
		];
		dispatch(removeArrow(arrowsList));
	};
	const displayArrows = () =>
		arrows.map(({ start, end, output }, index) => (
			<Xarrow
				color={output === 1 ? "#21aed9" : "#383c3d"}
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
					},
				}}
			/>
		));

	return <React.Fragment>{displayArrows()}</React.Fragment>;
};

export default ArrowsField;
