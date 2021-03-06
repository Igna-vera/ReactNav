import React from "react";
import Header from "./componentes/header/Header.js";
import ItemListContainer from "../src/componentes/ItemList/itemsListContainer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../src/componentes/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./componentes/context/CartContext";
import Cart from "../src/componentes/carrito/Cart";
import Home from "../src/componentes/home/home";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:id">
              <ItemListContainer props="Productos" />
            </Route>

            <Route exact path="/ItemDetailContainer/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/:id/carrito">
              <h1>carrito</h1>
              <Cart />
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
