import { combineReducers } from "redux";
import { userReducer } from "./login/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
