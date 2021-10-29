import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(true);
  const incrementar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const descontar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const agregar = () => {
    onAdd(contador);
  };

  return (
    <div>
      <h1>{contador}</h1>

      <button onClick={incrementar}>+</button>
      <button onClick={descontar}>-</button>

      <Link to="/carrito">
        <button onClick={agregar}>
          {activo ? <p>Agregar al carrito</p> : null}
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;
