import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLibrary from './element/ProductLibrary';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductLibrary} />
      </Switch>
    </Router>
  );
}

export default App;
