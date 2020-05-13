import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Cart from './Components/Cart';
import ProductLibrary from './Components/ProductLibrary';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={ProductLibrary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
