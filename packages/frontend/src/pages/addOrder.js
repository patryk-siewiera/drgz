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
          <button className="bg-blue-100 rounded-xl font-semibold p-5 text-center">
            Powrót do listy zleceń
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddOrder;
