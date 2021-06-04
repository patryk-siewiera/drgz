import React, { createContext, useState, Component } from "react";
import { v4 as uuidv4 } from "uuid";

export const OrderContext = createContext();

class OrderContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <div>
        <OrderContext.Provider value={{ ...this.state }}>
          OrderContext.js##OrderContext.js##OrderContext.js##OrderContext.js##
          {this.props.children}
        </OrderContext.Provider>
      </div>
    );
  }
}

export default OrderContextProvider;
