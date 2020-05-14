import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductLibrary from './Components/ProductLibrary';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={ProductLibrary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
