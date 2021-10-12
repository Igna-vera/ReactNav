import React from "react";
import Items from "./Items.js";
import ItemListContainer from "./itemsListContainer.js";

const ItemList = ({ manga }) => {
  return (
    <div>
      <h3>{manga.name}</h3>
      <p>
        {manga.precio}
        {manga.stock}
      </p>
    </div>
  );
};

export default ItemList;
