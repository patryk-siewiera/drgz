import React, { useEffect } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import CardOrder from "./components/CardOrdersExamples";
import { createContext, useState, Component } from "react";
import apiInstance from "../api";

function OrdersList() {
  const [drafts, setDrafts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(1);

  function createNewEntry() {
    setDrafts([...drafts, <CardOrder id={count} />]);
    setCount(count + 1);
  }

  useEffect(() => {
    (async () => {
      const orders = await apiInstance.getOrders();
      setOrders(orders);
    })();
  }, []);

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

        <div className="pt-10">
          <button
            onClick={createNewEntry}
            className="p-5 font-semibold text-center bg-red-100 right-1 rounded-xl hover:bg-blue-200"
          >
            quickly add a new component
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-10">{drafts}</div>
        {/* <pre>{JSON.stringify(orders, null, 2)}</pre> */}
        {orders.map((order) => (
          <CardOrder {...order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersList;
