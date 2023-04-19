const initialState = {
	gateZIndex: 31,
	arrows: [],
	connectionSettings: {
		selectedGate: "",
	},
};

export const game = (state = initialState, { type, payload }) => {
	switch (type) {
		case "INDEX_INCREASE":
			return { ...state, gateZIndex: state.gateZIndex + 1 };
		case "ARROW_START_ADD":
			return {
				...state,
				connectionSettings: {
					...state.connectionSettings,
					selectedGate: payload,
				},
			};
		case "ARROW_END_ADD":
			return {
				...state,
				arrows: [
					...state.arrows,
					{ start: state.connectionSettings.selectedGate, end: payload },
				],
				connectionSettings: {
					...state.connectionSettings,
					selectedGate: "",
				},
			};
		case "ARROW_REMOVE":
			return {
				...state,
				arrows: payload,
			};
		default:
			return state;
	}
};
