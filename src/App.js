import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
