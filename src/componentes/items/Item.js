import React from "react";
import ItemCount from "../body/itemCount";
import App2 from "./api";

const Item = ({ Item }) => {
  const { name, precio } = Item;
  return (
    <div style={{ border: "solid black 2px" }}>
      <h3>{name}</h3>
      <p>{precio}</p>
      <ItemCount />
    </div>
  );
};

export default Item;
