import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";
import "./ItemsApi.css";
import useCartContext from "../context/CartContext";

const ItemDetailContainer = () => {
  const [mangasId, setMangas] = useState([]);

  //Context
  const { productos, addItem } = useCartContext;

  const { id } = useParams();

  function onAdd(cantidad) {
    addItem({
      title: mangasId.title,
      cantidad: cantidad,
    });
  }

  const ObtenerMangasApi = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        fetch(`https://api.jikan.moe/v3/manga/${id}`).then((res) => res.json())
      );
    }, 2000);
  });
  useEffect(() => {
    ObtenerMangasApi.then((res) => {
      setMangas(res);
    });
    console.log(mangasId);
  }, []);

  return (
    <div>{mangasId && <ItemDetail mangasApi={mangasId} onAdd={onAdd} />}</div>
  );
};
export default ItemDetailContainer;
