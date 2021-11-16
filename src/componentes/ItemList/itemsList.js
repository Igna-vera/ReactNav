import React from "react";
import Item from "./Item.js";

const ItemList = ({ items }) => {
  console.log("soy item list");
  return (
    <div className="itemList">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
