const initialState = {
  darkTheme: false,
  lightTheme: true,
};

export const settings = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DARK_THEME":
      return { ...state, darkTheme: true };
    case "LIGHT_THEME":
      return { ...state, lightTheme: true };
    default:
      return state;
  }
};
