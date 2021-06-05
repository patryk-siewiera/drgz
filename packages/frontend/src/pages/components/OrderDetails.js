import React, { useState } from "react";
import { useForm } from "react-hook-form";

function orderDetailsComponent() {
  return (
    <div class="w-64 border">
      <div class="p-4">
        <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
          Example order
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          rem.
        </p>
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
