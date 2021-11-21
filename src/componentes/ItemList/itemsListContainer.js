import React, { useEffect, useState } from "react";
import "./Cart.css";
import ItemList from "./itemsList";
import { getFirestore } from "../services/getFirestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ props }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      db.collection(`Items`)
        .get()
        .then((resp) =>
          setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
        )
        .catch((err) => console.log(err));

      setLoading(true);
    } else {
      console.log("error");
    }
  }, [id]);

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>
      {loading ? (
        <ItemList items={items} />
      ) : (
        <div>
          <h4 color="white">Cargando...</h4>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
