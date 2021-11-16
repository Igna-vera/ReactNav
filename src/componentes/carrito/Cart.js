import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link, Route } from "react-router-dom";
import firebase from "firebase";
import { getFirestore } from "../services/getFirestore";

const Cart = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const { productos, addItem, removeItem, isInCart, clear, precioTotal } =
    useCartContext();

  const generarOrden = () => {
    let orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = formData;
    orden.total = precioTotal();
    orden.items = productos.map((producto) => {
      const title = producto.title;
      const precio = producto.precio * producto.contador;

      return { title, precio };
    });

    const db = getFirestore();
    const ordersCol = db.collection("orders");
    ordersCol
      .add(orden)
      .then((IdDocumento) => {
        console.log(IdDocumento.id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clear();
        setFormData({
          name: "",
          tel: "",
          email: "",
        });
        console.log("terminó la compra");
      });

    const itemsToUpdate = db.collection("Items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      productos.map((i) => i.id)
    );

    const batch = db.batch();

    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            productos.find((item) => item.id === docSnapshot.id).contador,
        });
      });

      batch.commit().then((res) => {
        console.log("resultado batch:", res);
      });
    });

    console.log(orden);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  return (
    <>
      <h1>Carrito</h1>
      {productos.length === 0 ? (
        <>
          <h3>Aun no hay nada</h3>
          <Link to="/">seguir comprando</Link>
        </>
      ) : (
        <>
          {productos.map((item) => (
            <>
              <p>{item.title}</p>
              <p>$ {item.score}</p>
              <p>Cantidad de tomos: {item.tomos}</p>
              <p>Agregados: {item.contador}</p>
              <p>Precio total: ${precioTotal()}</p>

              <button onClick={() => clear()}>Clear</button>
            </>
          ))}
        </>
      )}
      <form onSubmit={generarOrden} onChange={handleChange}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="tel"
          value={formData.tel}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
        />
        <button>Enviar</button>
      </form>

      <button onClick={() => generarOrden()}>Realizar Compra</button>
    </>
  );
};

export default Cart;
