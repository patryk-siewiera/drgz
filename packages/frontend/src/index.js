import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./pages/landingPage";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login";
import NoMatch from "./pages/noMatch";
import OrdersList from "./pages/ordersList";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/ordersList">
          <OrdersList />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/landingPage">
          <LandingPage />
        </Route>
        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
