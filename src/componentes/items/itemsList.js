import React from "react";
import Item from "./Item.js";

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
