import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const test = () => {
    console.log("Hola", productos);
  };
  const addItem = ({
    title,
    volumes,
    start_date,
    end_date,
    image_url,
    score,
    mal_id,
  }) => {
    setProductos([
      ...productos,
      { title, volumes, start_date, end_date, image_url, score, mal_id },
    ]);
  };

  return (
    <CartContext.Provider value={{ test, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default useCartContext;
