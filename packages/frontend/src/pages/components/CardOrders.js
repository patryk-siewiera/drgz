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

function CardOrder({ deleteCallback = undefined, ...props }) {
	return (
		<div class="flex flex-col pl-5  pr-5 pb-2 space-y-5 rounded-xl  bg-white shadow-md md:m-5 m-2 hover:shadow-2xl border-2 transition hover:duration-100">
			<div class="flex justify-center md:justify-end"></div>
			<div>
				<h2 class="text-gray-800 text-lg font-semibold">
					{props.type}
				</h2>
				<div className="text-md">{props.voivodeship}</div>
				<div className="mt-2">ID: {props.id}</div>
				<div className="mt-2">{props.city}</div>
				<div>{props.street}</div>
				<div>{descriptionParser(props.description, 5)}</div>
			</div>
			<div className="font-medium text-indigo-500 text-md">
				{props.cost} zł{" "}
				<div className="text-gray-500">
					{props.cost_negotiation === true ? "(negocjacja ceny)" : ""}
				</div>
			</div>
			<div className="flex flex-col-2">
				<div>
					<button
						onClick={() => deleteOrder(props.id, deleteCallback)}
						href="#"
						className="h-12 px-6 m-2 bg-red-300 rounded-lg w-30 focus:shadow-outline hover:bg-red-500"
					>
						Usuń
					</button>
				</div>
				<div>
					<button
						href="#"
						className="h-12 px-6 m-2 bg-green-300 rounded-lg w-30 focus:shadow-outline hover:bg-green-500"
					>
						Więcej detali
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardOrder;
