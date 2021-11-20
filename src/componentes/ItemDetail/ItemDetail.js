import ItemCount from "../ItemCount/itemCount";
import "./ItemsApi.css";

const ItemDetail = ({ mangasApi, onAdd, delet, clear, loading }) => {
  const { title, precio, pic } = mangasApi;

  return (
    <div className="itemDetail">
      <h3>{title}</h3>
      <img src={pic} alt="mangas" />
      <p>$ {precio}</p>
      <ItemCount
        stock={10}
        onAdd={onAdd}
        delet={delet}
        mangasApi={mangasApi}
        clear={clear}
      />
    </div>
  );
};

export default ItemDetail;
