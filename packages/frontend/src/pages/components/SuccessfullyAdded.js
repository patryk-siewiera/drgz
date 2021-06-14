import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

function SuccessfullyAdded() {
	return (
		<div className="items-center pt-10 m-auto text-center mw-w-md max-w-7xl">
			<div className="text-3xl">Ogłoszenie dodane poprawnie</div>
			<Link to="/OrdersList">
				<button className="p-3 mt-5 font-semibold bg-green-200 w-52 login rounded-xl hover:bg-green-500">
					Powrót do ogłoszeń
				</button>
			</Link>
		</div>
	);
}

export default SuccessfullyAdded;
