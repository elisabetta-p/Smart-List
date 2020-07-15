import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider rootComponent={TransitionGroup}>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
