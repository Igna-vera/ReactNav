import React from "react";
// import Nav from "./componentes/header/nav.js";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "./componentes/items/itemsListContainer.js";
import Contador from "./componentes/body/itemCount.js";
import ItemList from "./componentes/items/itemsList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer props="Productos" />
      <Contador stock="7">ASD</Contador>
    </div>
  );
}

export default App;
