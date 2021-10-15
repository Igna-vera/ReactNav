import React from "react";
import ItemList from "./itemsList";
import ItemListContainer from "./itemsListContainer.js";

const Items = ({ obtenerMangas }) => {
  const { name, precio } = obtenerMangas;
  return (
    <div>
      <h3>{name}</h3>
      <p>{precio}</p>
    </div>
  );
};

export default Items;
