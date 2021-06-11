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
        </div>

        <div className="grid-cols-4 gap-4 pt-10 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:justify-items-center">
          {orders.map((order) => (
            <CardOrder deleteCallback={refreshOrders} {...order} />
          ))}
        </div>
      </div>
      <div className="block text-center">
        <Link to="/landingPage">
          <button className="p-5 mb-5 font-semibold bg-gray-200 w-72 login rounded-xl hover:bg-gray-400 hover:underline">
            Powrót do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrdersList;
