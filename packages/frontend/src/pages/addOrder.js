import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function AddOrder() {
  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
        <div className="text-4xl">
          {" "}
          <br />
          Dodaj zlecenie
        </div>
        <br />
        <br />
        <form class="w-full max-w-lg">
          <div class="flex flex-row flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Typ Zlecenia (opcje dodac -> inne)
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Miejsce zlecenia
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Cena
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Województwo
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
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
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Kod pocztowy
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                placeholder="00-000"
              />
            </div>
          </div>
        </form>
        <br />
        <br />

        <button className="p-5 font-semibold text-center bg-green-100 rounded-xl hover:bg-green-200">
          + Dodaj
        </button>
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
