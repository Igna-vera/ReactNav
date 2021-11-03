import React, { useState, useEffect } from "react";
import ItemCount from "../body/itemCount";
import "./ItemsApi.css";
import useCartContext from "../context/CartContext";

const ItemDetail = ({ mangasApi, onAdd }) => {
  const { title, volumes, start_date, end_date, image_url, score, mal_id } =
    mangasApi;

  console.log(mangasApi);

  return (
    <div className="contenedorApi">
      <h3>{title}</h3>
      <img src={image_url} />

      <p>$ {score}</p>
      <p>Tomos: {volumes}</p>
      <ItemCount stock="6" onAdd={onAdd}></ItemCount>
    </div>
  );
};

export default ItemDetail;
