import React, { useEffect } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import CardOrder from "./components/CardOrders";
import { createContext, useState, Component } from "react";
import apiInstance from "../api";

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const orders = await apiInstance.getOrders();
      setOrders(orders);
    })();
  }, []);

  return (
    <div>
      <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
        <div className="grid grid-cols-4 gap-10">
          <div className="mt-2 text-5xl">Lista zleceń </div>

          <Link to="/addOrder">
            <button className="w-full p-5 font-semibold text-center bg-green-100 col-span rounded-xl hover:bg-green-200">
              + Dodaj zlecenie
            </button>
          </Link>
          <div></div>
          <Link to="/landingPage">
            <button className="w-full col-span-4 p-5 font-semibold text-center bg-blue-100 fo0t-semibold right-1 rounded-xl hover:bg-blue-200">
              Dronowa Giełda Zleceń
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-10">
          {orders.map((order) => (
            <CardOrder {...order} />
          ))}
        </div>
        <pre className="p-20">DATABASE: {JSON.stringify(orders, null, 2)}</pre>
      </div>
    </div>
  );
}

export default OrdersList;
