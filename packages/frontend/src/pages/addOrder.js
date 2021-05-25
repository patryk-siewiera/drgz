import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function AddOrder() {
  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="p-20">
        <div className="text-4xl">
          {" "}
          <br />
          Dodaj zlecenie
        </div>
        <br />
        <br />
        <br />
        <br />
        <Link to="/ordersList">
          <button className="p-5 font-semibold text-center bg-blue-100 rounded-xl hover:bg-blue-200">
            Powrót do listy zleceń
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddOrder;
