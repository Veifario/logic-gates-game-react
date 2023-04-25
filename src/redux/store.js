import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducers } from "./reducers/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ ...reducers });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
