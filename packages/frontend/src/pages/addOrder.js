import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { render } from "react-dom";
import CardOrder from "./components/CardOrders";
import apiInstance from "../api";
import LandingPage from "./LandingPage.js";
import { useHistory } from "react-router-dom";
import SuccessfullyAdded from "./components/SuccessfullyAdded";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

function AddOrder() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const history = useHistory();

	const [saveData, setSaveData] = useState({});

	function onSubmit(data) {
		setSaveData(data);
		apiInstance.createOrder(data);
		const successRoute = "/SuccessfullyAdded";
		history.push(successRoute);
	}

	return (
		<div>
			<div className="items-center m-auto p-7 mw-w-md max-w-7xl">
				<div className="text-5xl">Dodaj zlecenie</div>

				<div className="pt-7">
					<form
						className="w-full max-w-lg"
						onSubmit={handleSubmit(onSubmit)}
					>
						<label>
							Typ Zlecenia
							<select
								{...register("type", { required: true })}
								className="block w-full px-4 py-3 pr-10 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-state"
							>
								<option>Zdjęcia i filmy z drona</option>
								<option>Inspekcje z drona</option>
								<option>Ortofotomapy</option>
								<option>Modele 3D</option>
								<option>Rolnictwo precyzyjne</option>
								<option>Szkolenia NSTS</option>
							</select>
						</label>
						<label>
							Województwo
							<div className="relative">
								<select
									{...register("voivodeship", {
										required: true,
									})}
									className="block w-full px-4 py-3 pr-10 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								>
									<option>dolnośląskie</option>
									<option>kujawsko-pomorskie</option>
									<option>lubelskie</option>
									<option>lubuskie</option>
									<option>łódzkie</option>
									<option>małopolskie</option>
									<option>mazowieckie</option>
									<option>opolskie</option>
									<option>podkarpackie,</option>
									<option>podlaskie</option>
									<option>pomorskie</option>
									<option>śląskie</option>
									<option>świętokrzyskie</option>
									<option>warmińsko-mazurskie</option>
									<option>wielkopolskie</option>
									<option>zachodniopomorskie</option>
								</select>
							</div>
						</label>
						<label className="py-30">
							Miasto
							<input
								{...register("city", { required: true })}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								placeholder="Warszawa"
							/>
						</label>

						<label className="py-30">
							{" "}
							Ulica
							<input
								{...register("street", { required: true })}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								placeholder="Al. Jerozolimskie"
							/>
						</label>
						<label className="py-30">
							{" "}
							Opis
							<input
								{...register("description", { required: true })}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								placeholder="Opis zlecenia"
							/>
						</label>
						<label>
							Cena (zł)
							<input
								{...register("cost", { required: true })}
								className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								type="number"
								placeholder="1000"
							/>
						</label>
						<label>
							<input
								type="checkbox"
								{...register("cost_negotiation")}
							/>
							Do negocjacji
						</label>

						<div className="pt-3">
							<button className="p-3 font-semibold text-center bg-green-100 w-60 rounded-xl hover:bg-green-200">
								<input
									type="submit"
									value="Dodaj ogłoszenie +"
								/>
							</button>
						</div>
						<br />
					</form>
				</div>

				<Link to="/ordersList">
					<button className="p-3 font-semibold text-center bg-blue-100 rounded-xl hover:bg-blue-200">
						Powrót
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AddOrder;
