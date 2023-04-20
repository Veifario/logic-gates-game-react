const initialState = {
	lvlLogic: {},
	loading: false,
	gateZIndex: 31,
	arrows: [],
	gatesSettings: [],
	connectionSettings: {
		selectedGate: "",
		selectedGateOutput: null,
	},
};

export const game = (state = initialState, { type, payload }) => {
	switch (type) {
		case "FETCH_LVL_LOGIC":
			return { ...state, loading: true };
		case "FETCH_LVL_LOGIC_DONE":
			return { ...state, lvlLogic: payload, loading: false };
		case "INDEX_INCREASE":
			return { ...state, gateZIndex: state.gateZIndex + 1 };
		case "ARROW_START_ADD":
			return {
				...state,
				connectionSettings: {
					...state.connectionSettings,
					selectedGate: payload.id,
					selectedGateOutput: payload.output,
				},
			};
		case "ARROW_END_ADD":
			return {
				...state,
				arrows: [
					...state.arrows,
					{
						start: state.connectionSettings.selectedGate,
						end: payload,
						output: state.connectionSettings.selectedGateOutput,
					},
				],
				connectionSettings: {
					...state.connectionSettings,
					selectedGate: "",
					selectedGateOutput: null,
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
