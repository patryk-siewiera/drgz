import droneOperators from "./img/droneOperators.png";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function LandingPage() {
  return (
    <div className="text-2xl font-thin app">
      <div className="pt-10 pl-10 pr-10 m-auto mw-w-md max-w-7xl ">
        <div className="p-5 text-center bg-gradient-to-r from-red-100 to-blue-200 rounded-xl ">
          <div className="grid-flow-col gap-10 mx-4 xl:grid grid-col-2 md:p-10">
            <div className="col-span-9 text-5xl m-7">Dronowa giełda zleceń</div>

            <Link to="/ordersList">
              <button className="p-5 m-5 font-semibold bg-red-300 xl:w-full ordersList md:w-80 rounded-xl hover:bg-red-400">
                Lista Zleceń
              </button>
            </Link>

            <Link to="/login">
              <button className="p-5 m-5 font-semibold bg-green-400 xl:w-full md:w-80 login rounded-xl hover:bg-green-500">
                Zaloguj
              </button>
            </Link>
          </div>
        </div>

        <div className="grid-cols-3 pt-10 text-center xl:grid gap-x-8 gap-y-4 md:p-10">
          <div className="p-5 bg-blue-100 rounded-xl">
            Współpracujemy tylko z najlepszymi
          </div>
          <div className="p-5 bg-blue-200 rounded-xl">
            Używamy tylko najlepszego sprzętu
          </div>
          <div className="p-5 bg-blue-300 rounded-xl">
            Doświadczenie i renoma
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:p-10">
          <div className="bg-green-100 rounded-md p-7 ">1. Zarejestruj się</div>
          <div className="bg-green-200 rounded-md p-7">
            2. Dodaj zlecenie (inspekcja, raport UDT)
          </div>
          <div className="bg-green-300 rounded-md p-7">
            3. Znajdź wykonawcę z odpowiednim dronem w Twoim województwie
          </div>
        </div>
      </div>
      <div className="max-w-2xl pt-10 m-auto">
        <img src={droneOperators} alt="droneOperators" />
      </div>
    </div>
  );
}

export default LandingPage;
