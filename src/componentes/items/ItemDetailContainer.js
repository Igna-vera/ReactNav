import React from "react";
import ItemCount from "../body/itemCount";
import "./ItemsApi.css";

const ItemDetailContainer = ({ mangaApp }) => {
  const { title, volumes, start_date, end_date, image_url } = mangaApp;
  return (
    <div className="productosApi">
      <h3>{title}</h3>
      <img src={image_url} />
      <ul>
        <li>{volumes}</li>
        <li>
          {start_date}-{end_date}
        </li>
      </ul>
      <ItemCount />
    </div>
  );
};

export default ItemDetailContainer;
