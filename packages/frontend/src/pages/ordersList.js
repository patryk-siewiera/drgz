import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function OrdersList() {
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
          Lista zleceń
        </div>
        <br />
        <br />
        <br />
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

export default OrdersList;
