import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";
import { Link, Route } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Inicio</Link>

        <Link to="/carrito">carrito</Link>

        {/* <a href="/ItemDetail">
          <li>Detalles</li>
        </a> */}

        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
