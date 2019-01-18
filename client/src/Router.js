import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrdersPage from "./pages/OrdersPage";
import Table from "./pages/Table";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/orders/:id" component={OrdersPage} />
    <Route exact path="/table" component={Table} />
  </Switch>
);
export default Router;
