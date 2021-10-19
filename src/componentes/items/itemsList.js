import React from "react";
import Item from "./Item.js";
import App2 from "./api.js";

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
