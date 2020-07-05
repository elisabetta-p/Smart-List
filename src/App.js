import React from "react";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "redux-notifications/lib/styles.css";
import { Notifs } from "redux-notifications";
import "./Style/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
      <Notifs store={store} />
    </Provider>
  );
}

export default App;
