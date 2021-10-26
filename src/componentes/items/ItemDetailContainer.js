import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import ItemCount from "../body/itemCount";
import ItemDetail from "./ItemDetail";
import "./ItemsApi.css";

const ItemDetailContainer = () => {
  const [mangasId, setMangas] = useState([]);

  const { id } = useParams();

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

  return <div>{mangasId && <ItemDetail mangasApi={mangasId} />}</div>;
};
export default ItemDetailContainer;
