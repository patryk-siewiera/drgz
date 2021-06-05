import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrdersList from "./pages/OrdersList";
import AddOrder from "./pages/AddOrder";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// here state storing

// move here route function

ReactDOM.render(
  // const [adsList, setAdsList] = useState([]) -> to jest zle

  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/ordersList">
          <OrdersList />
        </Route>
        <Route exact path="/addOrder">
          <AddOrder />
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
