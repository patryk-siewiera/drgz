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

      <div className="p-20 text-3xl">
        błąd 404, strona nie została znaleziona
      </div>
      <div className="p-20">
        <Link to="/landingPage">
          <button className="p-5 font-semibold text-center bg-blue-100 rounded-xl">
            Powrót
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
