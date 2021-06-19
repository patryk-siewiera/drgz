import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

const ForgotPassword = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;

		console.log(email, password);
	};
	return (
		<div className="max-w-sm pt-24 m-auto">
			<div className="p-10 text-3xl font-bold text-center rounded-md shadow-xl bg-gradient-to-r from-red-200 to-blue-300 login">
				Zapomniałeś hasła?
			</div>
			<div className="max-w-xs pt-8 m-auto text-sm text-center">
				Podaj swój adres e-mail na który wyślemy link umożliwiający
				utworzenie nowego hasła.
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
							disabled
						/>
					</div>

					<div className="flex flex-col items-center justify-center pt-12 text-black gap-y-10">
						<Link to="/ForgotPassword">
							{" "}
							<button className="p-3 font-normal bg-red-100 rounded-md shadow-md w-72 login hover:bg-red-300 hover:underline">
								Zmień
							</button>
						</Link>
					</div>
				</form>
			</div>
			<div className="block pt-4 text-center">
				<Link to="/Login">
					<button className="p-3 mb-5 font-semibold bg-gray-200 rounded-md w-72 login hover:bg-gray-400 hover:underline">
						Powrót do strony logowania
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ForgotPassword;
