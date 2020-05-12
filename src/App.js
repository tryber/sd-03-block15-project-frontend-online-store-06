import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CategoryList from './CategoryList';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route exact path="/"><CategoryList /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
