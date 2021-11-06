import React from "react";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "./componentes/items/itemsListContainer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/items/ItemDetailContainer";
import { CartProvider } from "./componentes/context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <ItemListContainer props="Productos" />
            </Route>

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
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
