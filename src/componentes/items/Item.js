import React from "react";
import ItemCount from "../body/itemCount";
import { Link } from "react-router-dom";
const Item = ({ Item }) => {
  const { title, volumes, start_date, end_date, image_url, score, mal_id } =
    Item;
  return (
    <div style={{ border: "solid black 2px" }}>
      <h3>{title}</h3>
      <img src={image_url}></img>

      <p>Tomos: {volumes}</p>
      <p>$ {score}</p>
      <Link to={`/ItemDetailContainer/${mal_id}`}>Informacion</Link>
      <ItemCount />
    </div>
  );
};

export default Item;
