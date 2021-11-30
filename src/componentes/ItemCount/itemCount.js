import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./itemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [activo, setActivo] = useState(true);
  let initial = 0;
  if (stock > 0) {
    initial = 1;
  }
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const descontar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const agregar = () => {
    onAdd(contador);
    setActivo(false);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>+</button>
      <button onClick={descontar}>-</button>
      {activo ? (
        <button onClick={agregar}>Agregar al carrito</button>
      ) : (
        <div>
          <Link className="itemCountLink" to="/:id/carrito">
            Terminar compra
          </Link>
          <Link className="itemCountLink" to="/:id">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
