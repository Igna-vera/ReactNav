import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>Inicio</li>
        <li>Contacto</li>
        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
