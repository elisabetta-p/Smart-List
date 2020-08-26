import React from "react";
import Login from "./Pages/Login";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
