import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

const Register = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;

		console.log(email, password);
	};
	return (
		<div className="max-w-sm pt-20 m-auto">
			<div className="text-4xl font-bold text-center text-red-500">
				LOGOWANIE OD 30 CZERWCA
			</div>
			<div className="flex items-center justify-center mt-6 text-2xl text-black gap-x-2">
				{" "}
				<Link to="/Login">
					<button className="p-5 text-xl font-normal absolutew-40 bg-indigo-50 login hover:underline hover:bg-indigo-200">
						Zaloguj się
					</button>
				</Link>
				<div className="w-3/4 p-5 pt-10 pb-10 text-3xl font-bold text-center rounded-md shadow-2xl bg-gradient-to-r from-purple-300 to-blue-400 login">
					Rejestracja
				</div>
			</div>
			<div>
				{" "}
				<form onSubmit={handleFormSubmit}>
					<div className="pt-12">
						<label htmlFor="email">
							<div className="pb-2 text-sm font-light">
								E-mail (do konta drgz.pl)
							</div>
						</label>
						<input
							type="email"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="email"
							placeholder="E-mail (do konta drgz.pl)"
						/>
					</div>
					<div className="">
						<label htmlFor="password">
							<div className="pb-2 text-sm font-light">Hasło</div>
						</label>
						<input
							type="password"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="password"
							placeholder="Hasło"
						/>
					</div>
					<div className="pt-2 pb-20">
						<label htmlFor="password">
							<div className="pb-2 text-sm font-light">
								Powtórz hasło
							</div>
						</label>
						<input
							type="password"
							className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
							id="password"
							placeholder="Powtórz hasło"
						/>
						<label className="self-center gap-4 text-sm">
							<input type="checkbox" className="form-checkbox" />{" "}
							Przyjmuję do wiadomości, że <b>drgz.pl</b>{" "}
							wykorzystuje moje dane osobowe zgodnie z{" "}
							<div className="inline underline hover:bg-blue-100">
								Polityką prywatności
							</div>{" "}
							oraz{" "}
							<div className="inline underline hover:bg-blue-100">
								Polityką dotyczącą plików cookie i podobnych
								technologii.
							</div>
						</label>
					</div>

					<div className="flex items-center justify-center object-center text-black gap-x-2">
						<button className="p-3 font-semibold rounded-md shadow-md bg-yellow-50 w-72 login hover:bg-yellow-400 hover:underline">
							Zarejestruj się
						</button>
					</div>
				</form>
			</div>
			<div className="block object-center pt-20 text-center">
				<Link to="/landingPage">
					<button className="object-center p-3 mb-5 font-semibold bg-gray-200 rounded-md w-72 login hover:bg-gray-400 hover:underline">
						Powrót do strony głównej
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Register;
