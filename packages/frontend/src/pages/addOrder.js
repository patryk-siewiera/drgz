import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { useForm } from "react-hook-form";

function AddOrder() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 1));
  };

  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
        <div className="text-4xl">Dodaj zlecenie</div>
        <br />

        <form class="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Typ Zlecenia
            <select
              {...register("type", { required: true })}
              class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            <div class="relative">
              <select
                {...register("voivodeship", { required: true })}
                class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            {" "}
            Miasto
            <input
              {...register("city", { required: true })}
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Warszawa"
            />
          </label>

          <label className="py-30">
            {" "}
            Ulica
            <input
              {...register("street", { required: true })}
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Al. Jerozolimskie"
            />
          </label>
          <label className="py-30">
            {" "}
            Opis
            <input
              {...register("description", { required: true })}
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Opis zlecenia"
            />
          </label>
          <label>
            Cena (zł)
            <input
              {...register("cost", { required: true })}
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="1000"
            />
          </label>
          <label>
            <input type="checkbox" {...register("costNegotiation")} />
            Do negocjacji
          </label>
          <br />
          <br />
          <div className="p-5 font-semibold text-center bg-green-100 rounded-xl hover:bg-green-200">
            <input type="submit" />
          </div>
          <br />
        </form>

        <br />
        <br />
        <Link to="/ordersList">
          <button className="p-5 font-semibold text-center bg-blue-100 rounded-xl hover:bg-blue-200">
            Powrót
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddOrder;
