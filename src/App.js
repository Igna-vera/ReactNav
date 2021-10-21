import React from "react";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "./componentes/items/itemsListContainer.js";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/items/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ItemListContainer props="Productos" />
          </Route>
          <Route exact path="/ItemDetail">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
