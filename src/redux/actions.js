export const switchToDark = () => ({ type: "DARK_THEME" });
export const switchToLight = () => ({ type: "LIGHT_THEME" });

export const giveAllUserInfo = () => ({ type: "GIVE_USERS_INFO" });

export const giveUserName = (inputValue) => ({
	type: "GIVE_USER_NAME",
	payload: inputValue,
});

export const lvl1_completed = () => ({ type: "LVL1_COMPLETED" });
export const lvl2_completed = () => ({ type: "LVL2_COMPLETED" });
export const lvl3_completed = () => ({ type: "LVL3_COMPLETED" });
export const lvl4_completed = () => ({ type: "LVL4_COMPLETED" });
export const lvl5_completed = () => ({ type: "LVL5_COMPLETED" });
export const lvl6_completed = () => ({ type: "LVL6_COMPLETED" });

export const addUsers = (data) => ({ type: "GIVE_USERS_INFO", payload: data });

// Game Actions
export const gateIndexIncrease = () => ({ type: "INDEX_INCREASE" });
export const gateArrowStart = (ref) => ({
	type: "GATE_ARROW_START",
	payload: ref,
});
export const gateArrowEnd = (ref) => ({
	type: "GATE_ARROW_END",
	payload: ref,
});
