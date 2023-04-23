export const switchToDark = () => ({ type: "DARK_THEME" });
export const switchToLight = () => ({ type: "LIGHT_THEME" });

// _____
export const request = () => ({
  type: "PROGRESS_FETCHING",
});
export const requestDone = (data) => ({
  type: "PROGRESS_FETCHED",
  payload: data,
});
export const requestError = (message) => ({
  type: "PROGRESS_FETCHING_ERROR",
  payload: message,
});

// _____

export const giveProgress = (data) => ({
	type: "GIVE_PROGRESS",
	payload: data,
});
export const deleteProgress = (data) => ({
  type: "PROGRESS_DELETE",
  payload: data,
});
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

// Game Actions

export const fetchLvlLogic = () => ({ type: "FETCH_LVL_LOGIC" });
export const fetchLvlLogicDone = (data) => ({
  type: "FETCH_LVL_LOGIC_DONE",
  payload: data,
});

export const gateIndexIncrease = () => ({ type: "INDEX_INCREASE" });
export const addArrowStart = (id, output) => ({
  type: "ARROW_START_ADD",
  payload: { id, output },
});
export const addArrowEnd = (id) => ({ type: "ARROW_END_ADD", payload: id });

export const removeArrow = (arrows) => ({
  type: "ARROW_REMOVE",
  payload: arrows,
});

export const clearArrows = () => ({ type: "CLEAR_ARROWS" });
