import React from "react";

const Item = ({ Item }) => {
  const { name, precio } = Item;
  return (
    <div>
      <h3>{name}</h3>
      <p>{precio}</p>
    </div>
  );
};

export default Item;
