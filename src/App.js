import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cart from './componentes/cart';
import CategoryList from './CategoryList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/"><CategoryList /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
