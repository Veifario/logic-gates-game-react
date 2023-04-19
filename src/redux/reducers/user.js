const initialState = { usersInfo: [], userName: "" };

export const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GIVE_USERS_INFO":
			return { ...state, usersInfo: payload };
		case "GIVE_USER_NAME":
			return { ...state, userName: payload };
		default:
			return state;
	}
};
