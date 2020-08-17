import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";
import listsReducer from "./lists/listsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  lists: listsReducer,
  user: userReducer,
});

export default rootReducer;
