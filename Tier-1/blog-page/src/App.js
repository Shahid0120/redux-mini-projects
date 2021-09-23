import "./App.css";
import Nav from "./features/nav/Nav";
import { PostsList } from "./PostsList.js";
import { AddPostForm } from "./features/blogPost/AddPostForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
