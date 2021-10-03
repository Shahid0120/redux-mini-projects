import React from "react";
import Introduction from "./components/Introduction";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginInForm from "./components/LoginInForm";
import Main from "./components/Main";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Introduction} exact />
        <Route path="/login" component={LoginInForm} exact />
        <Route path="/main" component={Main} exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
