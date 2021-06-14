import droneOperators from "./img/droneOperators.jpg";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import CreatedBy from "./components/CreatedBy";

function LandingPage() {
	return (
		<div className="max-w-5xl pt-3 pl-5 pr-5 m-auto text-xl app mw-w-md">
			<div className="p-5 text-center shadow-2xl bg-gradient-to-r from-red-100 to-blue-200 rounded-xl">
				<div className="mt-10 mb-5 text-4xl ">
					Dronowa Giełda Zleceń
				</div>
				<div className="flex flex-col mb-5 sm:block sm:space-x-5">
					<Link to="/ordersList">
						<button className="p-3 mt-5 font-semibold rounded-md shadow-2xl bg-gradient-to-r from-red-300 to-red-500 w-60 ordersList hover:bg-gradient-to-r hover:from-yellow-400 hover:underline">
							Lista Zleceń
						</button>
					</Link>
					<Link to="/Login">
						<button className="p-3 mt-5 font-semibold bg-green-400 rounded-md shadow-md w-52 login hover:bg-green-500 hover:underline">
							Zaloguj
						</button>
					</Link>
				</div>
			</div>

			<div className="grid gap-2 text-sm text-center pt-7">
				<div className="p-5 ml-5 mr-5 bg-blue-100 shadow-xl rounded-xl">
					Współpracujemy tylko z najlepszymi
				</div>
				<div className="p-5 ml-5 mr-5 bg-blue-200 shadow-xl rounded-xl">
					Używamy tylko najlepszego sprzętu
				</div>
				<div className="p-5 ml-5 mr-5 bg-blue-300 shadow-xl rounded-xl">
					Doświadczenie i renoma
				</div>
			</div>

			<div className="grid grid-cols-1 text-sm text-center pt-7 gap-x-8 gap-y-2">
				<div className="ml-5 mr-5 bg-green-200 rounded-md shadow-md p-7">
					Zarejestruj się
				</div>
				<div className="ml-5 mr-5 bg-green-300 rounded-md shadow-md p-7">
					Dodaj zlecenie (inspekcja, raport UDT)
				</div>
				<div className="ml-5 mr-5 bg-green-400 rounded-md shadow-md p-7">
					Znajdź wykonawcę z odpowiednim dronem w Twoim województwie
				</div>
			</div>
			<div className="block w-11/12 pb-10 m-auto pt-7">
				<img src={droneOperators} alt="droneOperators" />
			</div>
			<div className="block text-center">
				<Link to="/Contact">
					<button className="p-3 text-base font-semibold bg-gray-200 rounded-md shadow-xl w-60 login hover:bg-gray-400 hover:underline">
						Kontakt
					</button>
				</Link>
			</div>
			<CreatedBy />
		</div>
	);
}

export default LandingPage;
