import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const addItem = ({
    title,
    volumes,
    start_date,
    end_date,
    image_url,
    score,
    mal_id,
    contador,
  }) => {
    if (isInCart(mal_id)) {
      const productosEnCarrito = [...productos];
      const itemToAdd = productosEnCarrito.find((i) => i.mal_id === mal_id);
      itemToAdd.contador += contador;
      setProductos([productosEnCarrito]);
    } else {
      setProductos([
        ...productos,
        {
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

  const removeItem = (mal_id) => {
    let carritoFilter = productos.filter((item) => {
      return item["mal_id"] !== mal_id;
    });
    setProductos(carritoFilter);
    return carritoFilter;
  };

  const isInCart = (mal_id) => {
    return productos.some((item) => {
      return item["mal_id"] === mal_id;
    });
  };

  const clear = () => {
    setProductos([]);
  };

  console.log(isInCart);

  return (
    <CartContext.Provider value={{ addItem, removeItem, isInCart, clear }}>
      {children}
    </CartContext.Provider>
  );
};
export default useCartContext;
