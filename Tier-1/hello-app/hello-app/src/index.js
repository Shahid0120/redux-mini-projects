import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { createStoreHook, Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
      <h1>{console.log(store.getState().loginInButton)}</h1>
    </Provider>
  </Router>,
  document.getElementById("root")
);
