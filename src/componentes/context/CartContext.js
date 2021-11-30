import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const addItem = (item, contador) => {
    if (productos.some((p) => p.id === item.id)) {
      let newCart = [...productos];

      let repetido = newCart.find((p) => p.id === item.id);
      console.log(repetido);
      repetido.contador = repetido.contador + contador;

      setProductos(newCart);
    } else {
      setProductos([...productos, item]);
    }
  };

  const removeItem = (id) => {
    let carritoFilter = productos.filter((Items) => {
      return Items["id"] !== id;
    });
    setProductos(carritoFilter);
    return carritoFilter;
  };

  const isInCart = (id) => {
    return productos.some((Items) => {
      return Items["id"] === id;
    });
  };

  const clear = () => {
    setProductos([]);
  };

  const carrito = () => {
    return productos.reduce((total, item) => total + item.contador, 0);
  };
  const precioTotal = () => {
    return productos.reduce(
      (total, item) => total + item.contador * item.precio,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        productos,
        addItem,
        removeItem,
        isInCart,
        clear,
        precioTotal,
        carrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default useCartContext;
