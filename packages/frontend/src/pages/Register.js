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
      <div className="flex items-center justify-center mt-6 text-2xl text-black gap-x-2">
        {" "}
        <Link to="/Login">
          <button className="w-40 p-5 font-normal bg-indigo-50 login hover:underline hover:bg-indigo-200">
            Zaloguj się
          </button>
        </Link>
        <div className="w-3/4 p-5 text-3xl font-bold text-center bg-indigo-100 shadow-xl login">
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
          <div className="pt-2 pb-12">
            <label htmlFor="password">
              <div className="pb-2 text-sm font-light">Powtórz hasło</div>
            </label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Powtórz hasło"
            />
          </div>

          <div className="flex items-center justify-center text-black gap-x-2">
            <button className="p-5 font-semibold bg-yellow-300 rounded-md shadow-md w-72 login hover:bg-yellow-400 hover:underline">
              Zarejestruj się
            </button>
          </div>
        </form>
      </div>
      <div className="block pt-20 text-center">
        <Link to="/landingPage">
          <button className="p-5 mb-5 font-semibold bg-gray-200 rounded-md w-72 login hover:bg-gray-400 hover:underline">
            Powrót do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
