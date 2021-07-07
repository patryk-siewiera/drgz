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

	const paginationSlice = (startSlice, endSlice, object) => {
		return object.slice(startSlice, endSlice);
	};

	const [page, setPage] = useState(0);

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
					{orders.slice(0, 9).map((order) => (
						<CardOrder
							onDetailsClick={(orderData) => {
								setOrderDetailed(orderData);
							}}
							deleteCallback={refreshOrders}
							{...order}
						/>
					))}
				</div>
			</div>

			{orderDetailed && (
				<div className="modal-details">
					<div className="grid max-w-md gap-5 m-auto text-center grid-row-7">
						<div className="mt-3 text-3xl text-gray-500">
							Szczegóły zlecenia
						</div>
						<div className="mt-5 text-2xl">
							{orderDetailed.city}
						</div>
						<div className="text-xl">{orderDetailed.street}</div>
						<div className="ml-5 mr-5">
							<i>{orderDetailed.description}</i>
						</div>
						<div className="text-xl font-bold text-blue-800">
							{orderDetailed.cost} zł
							<br />
							{orderDetailed.cost_negotiation === true
								? "(do negocjacji)"
								: ""}
						</div>

						<button
							className="p-3 m-auto mb-5 font-semibold text-center bg-gray-300 shadow-xl w-72 login rounded-xl hover:bg-gray-400 hover:underline"
							onClick={() => setOrderDetailed(undefined)}
						>
							Zamknij
						</button>
					</div>
				</div>
			)}
			<div className="gap-5 next-prev">
				<button
					className="p-3 mb-5 ml-2 font-semibold bg-yellow-200 shadow-xl w-60 login rounded-xl hover:bg-yellow-400 hover:underline"
					onClick={() => setPage(page - 1)}
				>
					Poprzednia
				</button>
				<div className="inline ml-5 mr-5 text-2xl">{page}</div>
				<button
					className="p-3 mb-5 mr-2 font-semibold bg-yellow-200 shadow-xl w-60 login rounded-xl hover:bg-yellow-400 hover:underline"
					onClick={() => setPage(page + 1)}
				>
					Następna
				</button>
			</div>

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
