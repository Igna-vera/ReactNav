import ItemCount from "../ItemCount/itemCount";
import "./ItemsApi.css";

const ItemDetail = ({ mangasApi, onAdd, delet, clear }) => {
  const { title, volumes, precio, pic, id } = mangasApi;
  console.log("detalle");
  return (
    <div className="contenedorApi">
      <h3>{title}</h3>
      <img src={pic} />

      <p>$ {precio}</p>
      <p>Tomos: {volumes}</p>

      <ItemCount
        stock="6"
        onAdd={onAdd}
        delet={delet}
        mangasApi={mangasApi}
        clear={clear}
      />
    </div>
  );
};

export default ItemDetail;
