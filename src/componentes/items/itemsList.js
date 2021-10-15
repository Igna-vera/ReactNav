import React from "react";
import Item from "./Item.js";
import ItemListContainer from "./itemsListContainer.js";

const ItemList = ({ mangas }) => {
  return (
    <>
      {mangas.map((manga) => {
        return <Item Item={manga} key={manga.id} />;
      })}
    </>
  );
};

export default ItemList;
