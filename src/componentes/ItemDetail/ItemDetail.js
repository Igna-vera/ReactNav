import React, { useState, useEffect } from "react";
import ItemCount from "../body/itemCount";
import "./ItemsApi.css";

const ItemDetail = ({ mangasApi, onAdd, delet, clear }) => {
  const { title, volumes, start_date, end_date, image_url, score, mal_id } =
    mangasApi;

  return (
    <div className="contenedorApi">
      <h3>{title}</h3>
      <img src={image_url} />

      <p>$ {score}</p>
      <p>Tomos: {volumes}</p>

      <ItemCount
        stock="6"
        onAdd={onAdd}
        delet={delet}
        mangasApi={mangasApi}
        clear={clear}
      />
    </div>
  );
};

export default ItemDetail;
