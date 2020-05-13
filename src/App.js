import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Cart from './componentes/cart';
import CartImg from './images/carrinho.png';
import ProductLibrary from './Components/ProductLibrary';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={ProductLibrary} />
            <Link to="/cart" data-testid="shopping-cart-button" >
              <img src={CartImg} alt="cart-button" />
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
