import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Xarrow from "react-xarrows";
import { removeArrow } from "../../../../redux/actions";

const ArrowsField = () => {
	const arrows = useSelector((state) => state.game.arrows);
	const dispatch = useDispatch();

	const findConnectedArrows = (arrowsList, chosenArrow) => {
		let foundArrows = [];
		let startPoint = "";
		let endPoint = chosenArrow.end;
		foundArrows.push(chosenArrow);
		arrows.forEach(({ start }) => {
			if (start === endPoint) {
				foundArrows.push(
					arrowsList.find(({ start, end }) => {
						startPoint = end;
						return start === endPoint;
					})
				);
				endPoint = startPoint;
			}
		});
		return foundArrows;
	};

	const disconnectArrows = (arrow) => {
		const arrowsList = [...findConnectedArrows([...arrows], arrow)];
		let filteredArrow = arrows;

		arrowsList.forEach(({ start: S, end: E }) => {
			filteredArrow = filteredArrow.filter(({ start, end }) => {
				return start !== S || end !== E;
			});
		});

		dispatch(removeArrow(filteredArrow));
	};

	const displayArrows = () =>
		arrows.map(({ start, end, output }, index) => (
			<Xarrow
				color={output === 1 ? "#21aed9" : "#071b29"}
				key={index}
				zIndex={0}
				showHead={false}
				start={start}
				end={end}
				endAnchor={"left"}
				startAnchor={"right"}
				passProps={{
					onClick: () => {
						if (window.confirm("Do u wanna delete this arrow?"))
							disconnectArrows({ start, end, output });
					},
				}}
			/>
		));

	return <React.Fragment>{displayArrows()}</React.Fragment>;
};

export default ArrowsField;
