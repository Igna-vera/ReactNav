import React from "react";
import ItemList from "./itemsList";
import ItemListContainer from "./itemsListContainer.js";

const ItemListContainer = ({ props }) => {
  const [mangas, setMangas] = useState([]);
  const ObtenerMangas = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Naruto", precio: 650, stock: 10 },
        { id: 2, name: "Ganzt", precio: 550, stock: 5 },
        { id: 3, name: "Kingdom", precio: 500, stock: 7 },
        { id: 4, name: "Chainsaw man", precio: 450, stock: 8 },
      ]);
    }, 2000);
  }).catch((err) => {
    console.log(err);
  });

  useEffect(() => {
    ObtenerMangas.then((resp) => setMangas(resp));
  }, []);

  return (
    <div className="CarritoContenedor">
      <h2>{props}</h2>
      {
        console.log(mangas)
        /* {obtenerMangas.map((obtenerMangas) => (
        <ItemList key={obtenerMangas.id} obtenerMangas={obtenerMangas} />
      ))} */
      }
      <ItemList mangas={mangas} />
    </div>
  );
};

export default Items;
