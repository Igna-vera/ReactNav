import React from "react";
import "./NavEstilos.css";
import Carrito from "../carrito/CartWidget.js";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Nav = () => {
  const { carrito } = useCartContext();
  return (
    <nav className="nav">
      <ul>
        <Link to="home/:id">
          <li>Productos</li>
        </Link>
        <Link to="/carrito">Carrito</Link>
        <h1>{carrito()}</h1>

        <Carrito />
      </ul>
    </nav>
  );
};

export default Nav;
