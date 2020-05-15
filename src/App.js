import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductLibrary from './Components/ProductLibrary';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import LinkToCart from './Components/LinkToCart';

function unitsInCart() {
  const products = JSON.parse(localStorage.getItem('buyList'));
  if (!products) return 0;
  return products.reduce((total, product) => total + Number(product.qnt), 0);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unitsInCart: unitsInCart() };
    this.updateLinkCart = this.updateLinkCart.bind(this);
  }

  updateLinkCart(variation) { // 1 or -1
    this.setState((state) => ({ unitsInCart: state.unitsInCart + variation }));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/products/:id" render={(props) => <ProductDetails {...props} />} />
            <Route exact path="/" component={ProductLibrary} />
          </Switch>
          <LinkToCart unitsInCart={this.state.unitsInCart} />
        </Router>
      </div>
    );
  }
}

export default App;
