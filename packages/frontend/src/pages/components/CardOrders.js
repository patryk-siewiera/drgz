import React from "react";
import mockData from "../MockData";

function CardOrder(props) {
  return (
    <div class="grid grid-rows-6 p-4 static w-64 h-96 border">
      <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
        {mockData[1].type}
      </h5>
      <p>województwo: {mockData[props.id].voivodeship}</p>
      <p>miasto: {mockData[props.id].city}</p>
      <p>ulica: {mockData[props.id].street}</p>
      <p>opis: {mockData[props.id].description}</p>
      <p>cena: {mockData[props.id].cost}</p>
      <div className="relative bottom-0 inline-block align-bottom">
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
