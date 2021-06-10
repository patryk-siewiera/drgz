import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function SuccessfullyAdded() {
  return (
    <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
      <div className="text-3xl">Ogłoszenie dodane poprawnie</div>
      <Link to="/OrdersList">
        <button className="p-5 mt-20 font-semibold bg-green-200 w-52 login rounded-xl hover:bg-green-500">
          Powrót do ogłoszeń
        </button>
      </Link>
    </div>
  );
}

export default SuccessfullyAdded;
