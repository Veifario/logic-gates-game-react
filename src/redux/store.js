import { createStore, combineReducers } from "redux";
import { reducers } from "./reducers/reducers";

const rootReducer = combineReducers({ ...reducers });
const store = createStore(rootReducer);

export default store;
