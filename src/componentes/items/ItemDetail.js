import React, { useState, useEffect } from "react";

import "./ItemsApi.css";

const ItemDetail = ({ mangasApi }) => {
  const { title, volumes, start_date, end_date, image_url, score, mal_id } =
    mangasApi;

  console.log(mangasApi);
  return (
    <div className="contenedorApi">
      <h3>{title}</h3>
      <img src={image_url} />

      <p>$ {score}</p>
      <p>Tomos: {volumes}</p>
    </div>
  );
};

export default ItemDetail;
