import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  console.log("soy item");
  const { title, volumes, mal_id, precio, pic, id } = item;
  return (
    <div className="items" style={{ border: "solid black 2px" }}>
      <h3>{title}</h3>
      <img src={pic}></img>

      <p>Tomos: {volumes}</p>
      <p>$ {precio}</p>
      <span> {mal_id}</span>
      <Link to={`/ItemDetailContainer/${id}`}>Informacion</Link>
    </div>
  );
};

export default Item;
