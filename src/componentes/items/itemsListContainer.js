import React from "react";
import "./Cart.css";
import Map from "./itemsList";

const Lista = ({ props }) => {
  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>
      <Map />
    </div>
  );
};

export default Lista;
