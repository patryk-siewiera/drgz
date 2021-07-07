import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import apiInstance from "../api";

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
								id="type"
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
									id="voivodeship"
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
								{...register("city", {
									required: true,
									maxLength: 50,
								})}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								id="city"
								placeholder="Warszawa"
							/>
						</label>

						<label className="py-30">
							{" "}
							Ulica
							<input
								{...register("street", {
									required: true,
									maxLength: 50,
								})}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								id="street"
								placeholder="Al. Jerozolimskie"
							/>
						</label>
						<label className="py-30">
							{" "}
							Opis
							<input
								{...register("description", {
									required: true,
									maxLength: 200,
								})}
								className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								aria-invalid={
									errors.description ? "true" : "false"
								}
								id="description"
								placeholder="Opis zlecenia"
							/>
						</label>
						<label>
							Cena (zł)
							<input
								{...register("cost", {
									required: true,
									min: 0,
									max: 1000000,
								})}
								className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
								id="cost"
								aria-invalid={errors.cost ? "true" : "false"}
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
						<div className="errors">
							{errors.city && (
								<div className="mt-5 mb-5 font-bold text-red-500 underline">
									Miasto: powinno mieć od 1 do 50 znaków (pole
									wymagane)
								</div>
							)}
							{errors.street && (
								<div className="mt-5 mb-5 font-bold text-red-500 underline">
									Ulica: powinna mieć od 1 do 50 znaków (pole
									wymagane)
								</div>
							)}
							{errors.description && (
								<div className="mt-5 mb-5 font-bold text-red-500 underline">
									Opis: powinien mieć od 1 do 200 znaków (pole
									wymagane)
								</div>
							)}
							{errors.cost && (
								<div className="mt-5 mb-5 font-bold text-red-500 underline">
									Cena: nie może być ujemna
								</div>
							)}
						</div>

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
