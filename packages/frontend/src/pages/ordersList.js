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

  const refreshOrders = async () => {
    const orders = await apiInstance.getOrders();
    setOrders(orders);
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <div>
      <div className="items-center p-20 m-auto mw-w-md max-w-7xl">
        <div className="sm:grid sm:gap-2 xl:grid-cols-4 xl:gap-10 xl:grid">
          <div className="mt-2 mb-10 text-5xl">Lista zleceń </div>

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

        <div className="grid-cols-4 gap-4 pt-10 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:justify-items-center">
          {orders.map((order) => (
            <CardOrder deleteCallback={refreshOrders} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersList;
