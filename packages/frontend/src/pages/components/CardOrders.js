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

function CardOrder({ deleteCallback = undefined, ...props }) {
  var isTrueSet = props.costNegotiation;
  return (
    <div class="flex flex-col pl-10 pr-10 pb-5 space-y-5 rounded-xl border border-gray bg-white shadow-md md:m-5 m-2 hover:shadow-2xl transition hover:duration-200">
      <div class="flex justify-center md:justify-end"></div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">{props.type}</h2>
        <div className="text-xl">{props.voivodeship}</div>
        <div className="mt-3">ID: {props.id}</div>
        <div className="mt-2">{props.city}</div>
        <div>{props.street}</div>
        <div className="mt-2 italic">{props.description}</div>
      </div>
      <div class="flex justify-end mt-4"></div>
      <div className="flex flex-col-2">
        <div>
          <button
            onClick={() => deleteOrder(props.id, deleteCallback)}
            href="#"
            className="h-10 px-6 m-2 bg-red-300 rounded-lg w-30 focus:shadow-outline hover:bg-red-500"
          >
            Usuń
          </button>
        </div>
        <div className="mt-2 ml-10 text-2xl font-medium text-indigo-500">
          {" "}
          {props.cost} zł --BOOL cost T/F--
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
