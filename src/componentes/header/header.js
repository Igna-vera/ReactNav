import React from "react";
import Nav from "./nav.js";
import "./HeaderEstilos.css";
import Carrito from "../carrito/CartWidget.js";

const Header = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
