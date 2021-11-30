import React from "react";
import { useCartContext } from "../context/CartContext";
const CartProductos = () => {
  const { productos, clear, precioTotal, removeItem } = useCartContext();

  return (
    <div>
      {productos.map((item, mangs) => (
        <div className="cartItems" key={mangs}>
          <p>{item.title}</p>
          <p>$ {item.precio}</p>
          <p>Agregados: {item.contador}</p>
          <p>Precio total: ${precioTotal()}</p>
          <button onClick={() => removeItem(item.id)}>delet</button>
        </div>
      ))}

      <button onClick={() => clear()}>Clear</button>
    </div>
  );
};
export default CartProductos;
