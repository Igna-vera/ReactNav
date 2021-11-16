import React, { useEffect, useState } from "react";
import "./Cart.css";
import ItemList from "./itemsList";
import { getFirestore } from "../services/getFirestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ props }) => {
  const [mangas, setMangas] = useState([]);
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // const ObtenerMangas = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(
  //       fetch("https://api.jikan.moe/v3/top/manga").then((res) => res.json())
  //     );
  //   }, 2000);
  // });

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      db.collection(`Items`)
        .get()
        .then((resp) =>
          setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
        )
        .catch((err) => console.log(err));
    } else {
      console.log("error");
    }

    // ObtenerMangas.then((res) => {
    //   if (res.top) {
    //     setMangas(res.top.slice(0, 6));
    //   } else {
    //     throw new Error("Datos incompletos");
    //   }
    // });
  }, [id]);
  console.log(items);
  console.log(mangas);

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
