import React from "react";
import mockData from "../MockData";

function CardOrder(props) {
  let id = 1;
  return (
    <div class="w-64 border">
      <div class="p-4">
        <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
          {mockData[1].type}
        </h5>
        <p>województwo: {mockData[props.id].voivodeship}</p>
        <p>miasto: {mockData[props.id].city}</p>
        <p>ulica: {mockData[props.id].street}</p>
        <p>opis: {mockData[props.id].description}</p>
        <p>cena: {mockData[props.id].cost}</p>
        <button
          href="#"
          class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
        >
          Więcej detali
        </button>
      </div>
    </div>
  );
}

export default CardOrder;
