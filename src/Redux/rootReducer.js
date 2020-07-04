import { combineReducers } from "redux";
import { reducer as notifReducer } from "redux-notifications";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  notifs: notifReducer,
  login: loginReducer,
});

export default rootReducer;
