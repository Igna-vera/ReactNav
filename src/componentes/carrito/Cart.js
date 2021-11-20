import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { getFirestore } from "../services/getFirestore";
import "./carrito.css";
import CartProductos from "./CartProductos";
import CartForm from "./CartForm";

const Cart = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const { productos, clear, precioTotal } = useCartContext();

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
        alert("compra ingresada");
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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="cart">
      <>
        {productos.length === 0 ? (
          <div className="cartCompra">
            <h3>Aun no hay nada</h3>
            <Link to="/home/:id">seguir comprando</Link>
          </div>
        ) : (
          <div className="cartClear">
            <CartProductos />
            <CartForm
              formData={formData}
              generarOrden={generarOrden}
              handleChange={handleChange}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default Cart;
