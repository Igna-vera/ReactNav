import React from "react";

import Schema from "./validacion";
const CartForm = ({ generarOrden, handleChange, formData }) => {
  const validacion = async (event) => {
    event.preventDefault();
    let data = {
      name: event.target[0].value,
      email: event.target[2].value,
      email2: event.target[3].value,
      phone: event.target[1].value,
    };
    const isValid = await Schema.isValid(data);
    if (isValid === true) {
      generarOrden();
    }
  };
  return (
    <form onSubmit={(generarOrden, validacion)} onChange={handleChange}>
      <input
        type="text"
        name="name"
        placeholder="name"
        defaultValue={formData.name}
      ></input>
      <input
        type="number"
        name="phone"
        placeholder="phone"
        defaultValue={formData.phone}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        defaultValue={formData.email}
      />
      <input
        type="email2"
        name="email2"
        placeholder="Ingrese el email nuevamente"
        defaultValue={formData.email2}
      />

      <button>Comprar</button>
    </form>
  );
};

export default CartForm;
