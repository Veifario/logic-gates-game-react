const initialState = { usersProgress: [], loadingStatus: "", errorMessage: "", exactUser: {} };

export const progress = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PROGRESS_FETCHING":
      return {
        ...state,
        loadingStatus: "loading",
      };
    case "PROGRESS_FETCHED":
      return {
        ...state,
        loadingStatus: "loaded",
        usersProgress: payload,
      };
    case "PROGRESS_FETCHING_ERROR":
      return {
        ...state,
        errorMessage: payload,
        loadingStatus: "error",
      };
    case "GIVE_PROGRESS":
      return { ...state, usersProgress: payload, loadingStatus: "loaded" };
    case "PROGRESS_DELETE":
      return { ...state, usersProgress: payload };
      case "EXACT_USER_FETCHED":
        return {...state, exactUser: payload, loadingStatus: "loaded"}
    default:
      return state;
  }
};
