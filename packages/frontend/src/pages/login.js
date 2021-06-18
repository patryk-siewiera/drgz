import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

const Login = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;

		console.log(email, password);
	};
	return (
		<div className="max-w-sm pt-20 m-auto">
			<div className="flex items-center justify-center mt-6 text-2xl text-black gap-x-2">
				{" "}
				<div className="w-3/4 p-5 pt-10 pb-10 text-3xl font-bold text-center rounded-md shadow-xl bg-gradient-to-r to-blue-400 from-purple-400 login">
					Zaloguj się
				</div>
				<Link to="/Register">
					<button className="w-40 p-5 text-xl font-normal bg-indigo-50 login hover:underline hover:bg-indigo-200">
						Rejestracja
					</button>
				</Link>
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
					<div className="pt-2 pb-12">
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

					<div className="flex flex-col items-center justify-center p-20 text-black gap-y-5">
						<button className="p-3 font-semibold bg-green-300 rounded-md shadow-md w-72 login hover:bg-green-400 hover:underline">
							Zaloguj się
						</button>
						<Link to="/ForgotPassword">
							{" "}
							<button className="p-3 font-normal rounded-md bg-red-50 w-72 login hover:bg-red-100 hover:underline">
								Przypomnij hasło
							</button>
						</Link>
					</div>
				</form>
			</div>
			<div className="block pt-4 text-center ">
				<Link to="/landingPage">
					<button className="p-3 mb-5 font-semibold bg-gray-200 rounded-md w-72 login hover:bg-gray-400 hover:underline">
						Powrót do strony głównej
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
