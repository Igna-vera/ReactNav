import React, { useEffect } from "react";
import "./Cart.css";
import Items from "./Items.js";
import ItemList from "./itemsList";

const ItemListContainer = ({ props }) => {
  const ObtenerMangas = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Items);
    }, 2000);
  }).catch((err) => {
    console.log("Error");
  });
  useEffect(() => {
    ObtenerMangas.then((resp) => console.log(resp));
  });

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>
      {Items.map((manga) => (
        <ItemList key={manga.name} manga={manga} />
      ))}
    </div>
  );
};

export default ItemListContainer;
