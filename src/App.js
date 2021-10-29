import React from "react";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "./componentes/items/itemsListContainer.js";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/items/ItemDetailContainer";
import Contador2 from "./componentes/body/itemCount2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ItemListContainer props="Productos" />
          </Route>
          {/* <Route exact path="/ItemDetail">
            //esto esta mal, deberia ir a un /itemDetail/:id . y pasar por
            params el id del item. BYe :D Muchas gracias!
            <ItemDetailContainer />
          </Route> */}
          <Route exact path="/ItemDetailContainer/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/carrito">
            <h1>carrito</h1>
          </Route>
          <Route exact path="*">
            <h1>Ruta no existe</h1>
          </Route>
        </Switch>
        {/* <ItemCount stock="5">asd</ItemCount> */}
      </BrowserRouter>
      <Contador2>asd</Contador2>
    </div>
  );
}

export default App;
