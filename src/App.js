import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductLibrary from './Components/ProductLibrary';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route exact path="/" component={ProductLibrary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
