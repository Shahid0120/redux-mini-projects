import React from "react";
import Introduction from "./components/Introduction";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/introduction" component={Introduction} exact />
      </Switch>
      <div>
        <Link to="/introduction">Login In</Link>
      </div>
      {/* <div className="App">
        <Introduction />
      </div> */}
    </React.Fragment>
  );
}

export default App;
