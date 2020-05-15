import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import ProductLibrary from './Components/ProductLibrary';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';

import cartImage from './images/carrinho.png';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" render={(props) => <ProductDetails {...props} />} />
          <Route exact path="/" component={ProductLibrary} />
        </Switch>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={cartImage} alt="cart-button" />
        </Link>
      </Router>
    </div>
  );
}

export default App;
