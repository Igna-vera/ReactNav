import React from "react";

const CartForm = ({ generarOrden, handleChange, formData }) => {
  return (
    <form onSubmit={generarOrden} onChange={handleChange}>
      <input
        type="text"
        name="name"
        placeholder="name"
        defaultValue={formData.name}
      ></input>
      <input
        type="number"
        name="tel"
        placeholder="tel"
        defaultValue={formData.tel}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        defaultValue={formData.email}
      />
      <button>Comprar</button>
    </form>
  );
};

export default CartForm;
