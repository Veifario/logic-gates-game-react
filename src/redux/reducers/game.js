const initialState = {
	gateZIndex: 31,
	gateArrowStart: "",
	gateArrowEnd: "",
};

export const game = (state = initialState, { type, payload }) => {
	switch (type) {
		case "INDEX_INCREASE":
			return { ...state, gateZIndex: state.gateZIndex + 1 };
		case "GATE_ARROW_START":
			return { ...state, gateArrowStart: payload };
		case "GATE_ARROW_END":
			return { ...state, gateArrowEnd: payload };
		default:
			return state;
	}
};
