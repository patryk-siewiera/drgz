import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="p-20 text-3xl">
        błąd 404, strona nie została znaleziona
      </div>
      <div className="p-20">
        <Link to="/landingPage">
          <button className="bg-blue-100 rounded-xl font-semibold p-5 text-center">
            Powrót
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
