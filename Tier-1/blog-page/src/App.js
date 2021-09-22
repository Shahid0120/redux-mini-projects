import "./App.css";
import Nav from "./features/nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./features/Pages/Home";
import About from "./features/Pages/About";
import Profile from "./features/Pages/Profile";
import Link from "./features/Link/Link";
import NotFound from "./features/Pages/NotFound";
import Post from "./features/Pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <div className='Links'>
        <Link />
      </div> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Post/:id" compoent={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
