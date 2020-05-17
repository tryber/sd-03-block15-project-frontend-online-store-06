import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductLibrary from './Components/ProductLibrary';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import Checkout from './Components/Checkout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route
              path="/products/:id"
              render={({ location }) => <ProductDetails location={location} />}
            />
            <Route exact path="/" component={ProductLibrary} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
