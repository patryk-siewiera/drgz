import React, { useEffect } from "react";
import { render } from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import CardOrder from "./components/CardOrders";
import { createContext, useState, Component } from "react";
import apiInstance from "../api";

function OrdersList() {
	const [orders, setOrders] = useState([]);

	const refreshOrders = async () => {
		const orders = await apiInstance.getOrders();
		setOrders(orders);
	};

	useEffect(() => {
		refreshOrders();
	}, []);

	const [orderDetailed, setOrderDetailed] = useState(undefined);

	return (
		<div className="m-auto text-center mw-w-md max-w-7xl">
			<div className="pb-4 text-5xl pt-7 ">Lista zleceń </div>
			<div className="pb-2 ">
				<Link to="/addOrder">
					<button className="p-3 font-semibold bg-green-100 shadow-md w-52 col-span rounded-xl hover:bg-green-200">
						+ Dodaj zlecenie
					</button>
				</Link>
			</div>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					{orders.map((order) => (
						<CardOrder
							onDetailsClick={(orderData) =>
								setOrderDetailed(orderData)
							}
							deleteCallback={refreshOrders}
							{...order}
						/>
					))}
				</div>
			</div>

			{orderDetailed && (
				<div className="modal-details">
					<div className="tall">123123</div>
					<h2>Szczegóły zlecenia {orderDetailed.id}</h2>
					<div>Nazwa: miejsce:</div>
					<button onClick={() => setOrderDetailed(undefined)}>
						Zamknij
					</button>
				</div>
			)}

			<div className="block text-center">
				<Link to="/landingPage">
					<button className="p-3 mb-5 font-semibold bg-gray-200 shadow-xl w-72 login rounded-xl hover:bg-gray-400 hover:underline">
						Powrót do strony głównej
					</button>
				</Link>
			</div>
		</div>
	);
}

export default OrdersList;
