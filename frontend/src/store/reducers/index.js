import { combineReducers } from "redux";
import node from "./node_reducer";

const rootReducer = combineReducers({
  node,
});

export default rootReducer;
