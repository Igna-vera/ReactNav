import React, { useEffect, useState } from "react";
import "./Cart.css";
import Items from "./Items.js";
import ItemList from "./itemsList";

const ItemListContainer = ({ props }) => {
  const [obtenerMangas, setMangas] = useState([]);
  const ObtenerMangas = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Items);
    }, 2000);
  }).catch((err) => {
    console.log("Error");
  });
  useEffect(() => {
    ObtenerMangas.then((resp) => setMangas(resp));
  });

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>
      {obtenerMangas.map((obtenerMangas) => (
        <ItemList key={obtenerMangas.id} obtenerMangas={obtenerMangas} />
      ))}
    </div>
  );
};

export default ItemListContainer;
