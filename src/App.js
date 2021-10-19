import React from "react";
// import Nav from "./componentes/header/nav.js";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "./componentes/items/itemsListContainer.js";
import Contador from "./componentes/body/itemCount.js";
import App2 from "./componentes/items/api.js";
import ItemDetailContainer from "./componentes/items/ItemDetailContainer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer props="Productos" />

      <App2 />
    </div>
  );
}

export default App;
