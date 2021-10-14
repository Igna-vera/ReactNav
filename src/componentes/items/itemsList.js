import React from "react";
import Items from "./Items.js";
import ItemListContainer from "./itemsListContainer.js";

const ItemList = ({ obtenerMangas }) => {
  const { name, precio } = obtenerMangas;

  return (
    <div>
      <h3>{name}</h3>
      <p>{precio}</p>
    </div>
  );
};

export default ItemList;
