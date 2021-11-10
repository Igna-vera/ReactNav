import React, { useEffect, useState } from "react";
import "../carrito/Cart.css";
import ItemList from "./itemsList";

const ItemListContainer = ({ props }) => {
  const [mangas, setMangas] = useState([]);

  const ObtenerMangas = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        fetch("https://api.jikan.moe/v3/top/manga").then((res) => res.json())
      );
    }, 2000);
  });
  useEffect(() => {
    ObtenerMangas.then((res) => {
      if (res.top) {
        setMangas(res.top.slice(0, 6));
      } else {
        throw new Error("Datos incompletos");
      }
    });
  }, []);
  console.log(mangas);

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>

      {/* {obtenerMangas.map((obtenerMangas) => (
        <ItemList key={obtenerMangas.id} obtenerMangas={obtenerMangas} />
      ))} */}
      <ItemList mangas={mangas} />
    </div>
  );
};

export default ItemListContainer;
