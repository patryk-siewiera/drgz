import React from "react";
import mockData from "../MockData";
import apiInstance from "../../api";

function deleteOrder(id) {
  console.log("id of deleted item", id);
  apiInstance.removeOrder();
}

function CardOrder(props) {
  return (
    <div class="grid grid-rows-6 p-4 static w-64 h-96 border">
      <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
        {props.type}
      </h5>
      <p>ID: {props.id}</p>
      <p>województwo: {props.voivodeship}</p>
      <p>miasto: {props.city}</p>
      <p>ulica: {props.street}</p>
      <p>opis: {props.description}</p>
      <p>cena: {props.cost}</p>
      <div className="grid grid-cols-2">
        <div className="">
          <button
            href="#"
            class="h-16 w-30 px-6 m-2 bg-green-200 rounded-lg focus:shadow-outline hover:bg-green-500"
          >
            Więcej detali
          </button>
        </div>
        <div className="">
          <button
            onClick={() => deleteOrder(props.id)}
            href="#"
            class="h-16 w-30 px-6 m-2 bg-red-300 rounded-lg focus:shadow-outline hover:bg-red-500"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
