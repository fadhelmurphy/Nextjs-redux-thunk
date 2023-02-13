import { combineReducers } from "redux";
import storeHistory from "./historyListReducer";

const rootReducer = combineReducers({
    storeHistory,
});

export default rootReducer;
