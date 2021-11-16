import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";
import { Link, Route } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Nav = () => {
  const { carrito } = useCartContext();
  return (
    <nav className="nav">
      <ul>
        <Link to="home/:id">Productos</Link>
        <Link to="/carrito">carrito</Link>
        <h1>{carrito()}</h1>

        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
