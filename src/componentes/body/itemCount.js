import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

const ItemCount = ({ stock, onAdd, delet, mangasApi, clear }) => {
  const [contador, setContador] = useState(0);

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
      <button onClick={agregar}>Agregar al carrito</button>
      <button onClick={() => delet(mangasApi.mal_id)}>delet</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
};

export default ItemCount;
