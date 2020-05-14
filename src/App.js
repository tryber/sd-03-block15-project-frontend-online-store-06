import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cart from './Components/Cart';
import ProductLibrary from './Components/ProductLibrary';

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
