import React from "react";
import ItemDetailContainer from "./ItemDetailContainer.js";
import "./ItemsApi.css";

const ItemDetail = ({ mangasApi }) => {
  return (
    <div className="contenedorApi">
      {mangasApi.map((manga) => (
        <ItemDetailContainer mangaApp={manga} key={manga.mal_id} />
      ))}
    </div>
  );
};

export default ItemDetail;
