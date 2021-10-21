import React from "react";
import ItemDetailContainer from "./ItemDetailContainer.js";
import "./ItemsApi.css";

const ItemDetail = ({ mangasApi }) => {
  const { title, volumes, start_date, end_date, image_url, score } = mangasApi;

  return (
    <div className="contenedorApi">
      {mangasApi.map((manga) => (
        <div>
          <h3>{manga.title}</h3> <img src={manga.image_url}></img>
          <p>Tomos: {manga.volumes}</p>
          <p>$ {manga.score}</p>
          <p>Fecha de inicio: {manga.start_date}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
