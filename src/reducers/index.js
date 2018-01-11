// import { combineReducers } from "redux";

// redux-persist
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import windowState from "./window-state";

const reducers = {
  windowState
};

const config = { key: "primary", storage, whitelist: ["windowState"] };

const combinedReducers = persistCombineReducers(config, reducers);
export default combinedReducers;
