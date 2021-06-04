import React from "react";
import OrderContextProvider from "./contexts/OrderContext";
import Navbar from "./components/Navbar";

function TestContextFunction() {
  return (
    <div>
      @@TestContext.js@@before@@
      <br />
      <br />
      {/* <Navbar /> */}
      <OrderContextProvider>
        <Navbar />
        --TestContext.js----TestContext.js--
      </OrderContextProvider>
    </div>
  );
}

export default TestContextFunction;
