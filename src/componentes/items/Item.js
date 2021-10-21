import React from "react";
import ItemCount from "../body/itemCount";
import ItemDetail from "./ItemDetail";
const Item = ({ Item }) => {
  const { title, volumes, start_date, end_date, image_url, score } = Item;
  return (
    <div style={{ border: "solid black 2px" }}>
      <h3>{title}</h3>
      <img src={image_url}></img>

      <p>Tomos: {volumes}</p>
      <p>$ {score}</p>

      <ItemCount />
    </div>
  );
};

export default Item;
