import React from "react";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./Style/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Router basename="https://elisabetta-p.github.io/Smart-List/">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
