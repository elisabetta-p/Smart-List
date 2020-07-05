import { combineReducers } from "redux";
import { reducer as notifReducer } from "redux-notifications";
import loginReducer from "./login/loginReducer";
import signupReducer from "./signup/signupReducer";

const rootReducer = combineReducers({
  notifs: notifReducer,
  login: loginReducer,
  signup: signupReducer,
});

export default rootReducer;
