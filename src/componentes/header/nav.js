import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";
import { Link, Route } from "react-router-dom";

const Nav = ({ contador }) => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">carrito</Link>
        <h1>{contador}</h1>

        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
