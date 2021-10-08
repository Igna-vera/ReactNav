import React from "react";
// import Nav from "./componentes/header/nav.js";
import Header from "./componentes/header/Header.js";
import Lista from "./componentes/items/itemsListContainer.js";

import Contador from "./componentes/body/itemCount.js";
import Map from "./componentes/items/itemsList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Lista props="Productos" />
      <Contador stock="7">ASD</Contador>
    </div>
  );
}

export default App;
