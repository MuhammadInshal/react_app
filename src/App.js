import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Cart from "./components/Cart/Cart.js";
import Detail from "./components/Detail.js";
import Product from "./components/Product.js";
import Default from "./components/Default.js";
import ProductList from "./components/ProductList.js";
import Modal from "./components/Modal.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  )
}

export default App;
