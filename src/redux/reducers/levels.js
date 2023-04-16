const initialState = {
  lvl1: false,
  lvl2: false,
  lvl3: false,
  lvl4: false,
  lvl5: false,
  lvl6: false,
};

export const levels = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LVL1_COMPLETED":
      return { ...state, lvl1: true };
    case "LVL2_COMPLETED":
      return { ...state, lvl2: true };
    case "LVL3_COMPLETED":
      return { ...state, lvl3: true };
    case "LVL4_COMPLETED":
      return { ...state, lvl4: true };
    case "LVL5_COMPLETED":
      return { ...state, lvl5: true };
    case "LVL6_COMPLETED":
      return { ...state, lvl6: true };
    default:
      return state;
  }
};
