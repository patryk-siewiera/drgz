import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import CardOrder from "./CardOrders";

function showAlert() {
  alert("test");
}

function OrdersList() {
  return (
    <div>
      <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
        <div className="grid grid-cols-4 gap-4">
          <div className="mt-2 text-4xl">Lista zleceń </div>

          <Link to="/addOrder">
            <button className="p-5 font-semibold text-center bg-green-100 col-span rounded-xl hover:bg-green-200">
              + Dodaj zlecenie
            </button>
          </Link>

          <Link to="/landingPage">
            <button className="p-5 font-semibold text-center bg-blue-100 fo0t-semibold right-1 rounded-xl hover:bg-blue-200">
              Dronowa Giełda Zleceń
            </button>
          </Link>
        </div>
        <br />
        <br />
        <button
          onClick={showAlert}
          className="p-5 font-semibold text-center bg-red-100 fo0t-semibold right-1 rounded-xl hover:bg-blue-200"
        >
          quickly add new component
        </button>

        <br />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-4 gap-4">
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </div>
        <br />
      </div>
    </div>
  );
}

export default OrdersList;
