import React, { useState } from "react";

const ItemCount = ({ stock, onAdd, delet, mangasApi, clear }) => {
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
          <button>Terminar compra</button>
          <button onClick={() => delet(mangasApi.id)}>delet</button>
          <button onClick={() => clear()}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
