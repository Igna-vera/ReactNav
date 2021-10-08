import React from "react";
import Items from "./Items.js";

const Map = () => {
  const mapMangas = Items.map((item) => (
    <li key={item.id}>
      {item.name}
      {item.precio}
    </li>
  ));
  return <ul>{mapMangas}</ul>;
};

// const ItemsList = new Promise((resolve, rejected) => {
//   console.log("asd");
//   setTimeout(() => {
//     resolve(Items);
//     ItemsList.then(resp);
//   }, 2000);
// });

export default Map;
