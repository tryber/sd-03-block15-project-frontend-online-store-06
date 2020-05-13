import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route exact path="/">
            <CategoryList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
