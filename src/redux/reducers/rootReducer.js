import { combineReducers } from "redux";
import convertReducer from "./convertReducer";
import historicalReducer from "./historicalReducer";
import comparisonReducer from "./comparisonReducer";
import chartsReducer from "./chartsReducer";

const rootReducer = combineReducers({
    convertReducer,
    historicalReducer,
    comparisonReducer,
    chartsReducer,
})

export default rootReducer;