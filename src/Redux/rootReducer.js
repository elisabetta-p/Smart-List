import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";
import listsReducer from "./lists/listsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  lists: listsReducer,
});

export default rootReducer;
