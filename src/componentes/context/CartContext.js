import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const addItem = ({
    id,
    precio,
    title,
    volumes,
    start_date,
    end_date,
    image_url,
    score,
    mal_id,
    contador,
  }) => {
    if (isInCart(id)) {
      const productosEnCarrito = [...productos];
      const itemToAdd = productosEnCarrito.find((i) => i.id === id);
      itemToAdd.contador += contador;
      setProductos([productosEnCarrito]);
    } else {
      setProductos([
        ...productos,
        {
          id,
          precio,
          title,
          volumes,
          start_date,
          end_date,
          image_url,
          score,
          mal_id,
          contador,
        },
      ]);
    }
  };

  const removeItem = (id) => {
    let carritoFilter = productos.filter((item) => {
      return item["id"] !== id;
    });
    setProductos(carritoFilter);
    return carritoFilter;
  };

  const isInCart = (id) => {
    return productos.some((item) => {
      return item["id"] === id;
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

  console.log(isInCart);

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
