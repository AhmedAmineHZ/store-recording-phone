import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Default from "./component/Default";
import Details from "./component/Details";
import Cart from "./component/Cart/Cart";
import Modal from "./component/Modal";

class App extends React.Component {
  render() {
      return (
          <React.Fragment>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={ProductList} />
                  <Route path="/details" component={Details} />
                  <Route path="/cart" component={Cart} />
                  <Route component={Default} />
              </Switch>
              <Modal/>
          </React.Fragment>
      );
  }
}

export default App;
