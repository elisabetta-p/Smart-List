import React from "react";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "redux-notifications/lib/styles.css";
import { Notifs } from "redux-notifications";
import "./Style/style.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
      <Notifs store={store} />
    </Provider>
  );
}

export default App;
