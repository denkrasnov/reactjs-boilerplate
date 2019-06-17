import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RxJSexample from "./RxJSexample";
import Home from "./Home";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rxjs">RxJS example</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/rxjs" component={RxJSexample} />
    </div>
  </Router>
);

export default hot(module)(App);
