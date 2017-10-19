import React from "react";
import ReactDOM from "react-dom";
import App, { AppPromise } from "./containers/App";

AppPromise().then(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
