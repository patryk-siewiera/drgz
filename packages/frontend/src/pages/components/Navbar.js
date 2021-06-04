import React, { useContext, Component } from "react";

import { OrderContext } from "../contexts/OrderContext";

class Navbar extends Component {
  static contextType = OrderContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    return (
      <div>
        <div className="text-3xl text-red-500">
          Navbar.js++Navbar.js++Navbar.js++ Navbar.js++ Navbar.js++
        </div>
        {/* <p>you have -- {order.length} -- orders</p> */}
      </div>
    );
  }
}

export default Navbar;
