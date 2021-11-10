import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link, Route } from "react-router-dom";

const Cart = () => {
  const [formData, setFormData] = useState({
    title: "",
    mal_id: "",
  });
  const { productos, addItem, removeItem, isInCart, clear, precioTotal } =
    useCartContext();

  return (
    <>
      <h1>Carrito</h1>
      {productos.length === 0 ? (
        <>
          <h3>Aun no hay nada</h3>
          <Link to="/">seguir comprando</Link>
        </>
      ) : (
        <>
          {productos.map((item) => (
            <>
              <p>{item.title}</p>
              <p>$ {item.score}</p>
              <p>Cantidad de tomos: {item.tomos}</p>
              <p>Agregados: {item.contador}</p>
              <p>Precio total: ${precioTotal()}</p>

              <button onClick={() => clear()}>Clear</button>
            </>
          ))}
        </>
      )}

      <button>Realizar Compra</button>
    </>
  );
};

export default Cart;
