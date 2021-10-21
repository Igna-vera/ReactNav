import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>Inicio</li>

        <a href="/ItemDetail">
          <li>Detalles</li>
        </a>

        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
