import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrdersList from "./pages/OrdersList";
import AddOrder from "./pages/AddOrder";
import SuccessfullyAdded from "./pages/SuccessfullyAdded";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import CreatedBy from "./pages/components/CreatedBy";

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
				<Route path="/Login">
					<Login />
				</Route>
				<Route exact path="/OrdersList">
					<OrdersList />
				</Route>
				<Route exact path="/AddOrder">
					<AddOrder />
				</Route>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/LandingPage">
					<LandingPage />
				</Route>
				<Route exact path="/SuccessfullyAdded">
					<SuccessfullyAdded />
				</Route>
				<Route exact path="/Contact">
					<Contact />
				</Route>
				<Route exact path="/Register">
					<Register />
				</Route>
				<Route exact path="/ForgotPassword">
					<ForgotPassword />
				</Route>
				<Route exact path="*">
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
