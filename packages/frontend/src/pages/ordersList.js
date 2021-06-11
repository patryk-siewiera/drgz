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
    <div className="m-auto mw-w-md max-w-7xl">
      <div className="flex flex-row pt-20 pb-5 pl-20 gap-x-16">
        <div className="text-5xl ">Lista zleceń </div>
        <Link to="/addOrder">
          <button className="p-5 font-semibold text-center bg-green-100 shadow-md w-52 col-span rounded-xl hover:bg-green-200">
            + Dodaj zlecenie
          </button>
        </Link>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {orders.map((order) => (
            <CardOrder deleteCallback={refreshOrders} {...order} />
          ))}
        </div>
      </div>
      <div className="block text-center">
        <Link to="/landingPage">
          <button className="p-5 mb-5 font-semibold bg-gray-200 shadow-xl w-72 login rounded-xl hover:bg-gray-400 hover:underline">
            Powrót do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrdersList;
