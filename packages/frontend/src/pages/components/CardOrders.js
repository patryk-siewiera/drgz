import React from "react";
import mockData from "../MockData";
import apiInstance from "../../api";

async function deleteOrder(id, callback) {
	alert("Removed:  ");
	await apiInstance.removeOrder(id);
	if (callback !== undefined) {
		// like .then
		callback();
	}
}

function countWords(str) {
	str = str.replace(/(^\s*)|(\s*$)/gi, "");
	str = str.replace(/[ ]{2,}/gi, " ");
	str = str.replace(/\n /, "\n");
	return str.split(" ").length;
}

function descriptionParser(str, cutAtPoint) {
	// if description longer than 5 (cutAtPoint) words, cut and add "..."
	let words_count = countWords(str);
	if (words_count < cutAtPoint) {
		return str;
	} else {
		let toArraySeparatorSpace = str.split(" ");
		let cuttedString = toArraySeparatorSpace.slice(0, cutAtPoint);
		let addDots = cuttedString.join(" ") + "...";
		return addDots;
	}
}

function CardOrder({
	deleteCallback = undefined,
	onDetailsClick = (orderData) => {},
	...props
}) {
	return (
		<div className="flex flex-col pl-5 pr-5 m-2 space-y-5 text-center transition bg-white border-2 shadow-md rounded-xl md:m-5 hover:shadow-md hover:duration-100">
			<div>
				<h2 className="text-lg font-semibold text-gray-800">
					{props.type}
				</h2>
				<div className="text-md">{props.voivodeship}</div>
				<div className="mt-2">ID: {props.id}</div>
				<div className="mt-2">{props.city}</div>
				<div>{props.street}</div>
				<div>{descriptionParser(props.description, 5)}</div>
				<div className="font-bold text-blue-700">
					{props.cost} zł{" "}
					{props.cost_negotiation === true ? "(negocjacja ceny)" : ""}
				</div>
			</div>
			<div className="grid text-center grid-col-2">
				{/* <button
					onClick={() => deleteOrder(props.id, deleteCallback)}
					className="w-32 h-12 px-6 m-2 text-center bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-500"
				>
					Usuń
				</button> */}
				<div>
					<button
						href="#"
						onClick={onDetailsClick}
						className="w-32 px-6 m-2 bg-green-300 rounded-lg h-14 focus:shadow-outline hover:bg-green-500"
					>
						Więcej detali
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardOrder;
