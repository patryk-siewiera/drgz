import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function Login() {
  return (
    <div>

      <div className="p-20">
        <div className="text-4xl">
          {" "}
          <br />
          Zaloguj się
        </div>
        <br />
        <br />
        <form>
          <label>
            Login
            <input className="border-4" type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="p-10">
          <br />
          Załóż konto
          <br />
          <br />
          Nie pamiętam hasła
        </div>
        <br />
        <Link to="/landingPage">
          <button className="bg-blue-100 rounded-xl font-semibold p-5 text-center">
            Powrót
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
