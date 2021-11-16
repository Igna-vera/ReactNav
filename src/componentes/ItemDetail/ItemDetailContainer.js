import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import "./ItemsApi.css";
import useCartContext from "../context/CartContext";
import { getFirestore } from "../services/getFirestore";
import "./itemDetail.css";

const ItemDetailContainer = () => {
  const [mangasId, setMangas] = useState([]);
  const [activo, setActivo] = useState(false);
  //Context
  const { addItem, removeItem, clear } = useCartContext();

  const { id } = useParams();

  function onAdd(contador) {
    setActivo(true);
    addItem({
      id: mangasId.id,
      precio: mangasId.precio,
      title: mangasId.title,
      volumes: mangasId.volumes,
      start_date: mangasId.start_date,
      score: mangasId.score,
      mal_id: mangasId.mal_id,
      contador: contador,
    });
  }

  useEffect(() => {
    const dbQuey = getFirestore();
    dbQuey
      .collection("Items")
      .doc(id)
      .get()
      .then((resp) => setMangas({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {mangasId && (
        <ItemDetail
          mangasApi={mangasId}
          onAdd={onAdd}
          delet={removeItem}
          clear={clear}
        />
      )}
    </div>
  );
};
export default ItemDetailContainer;
