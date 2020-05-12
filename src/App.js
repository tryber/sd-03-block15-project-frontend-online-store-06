import React from 'react';
import { Router, Switch, Route, BrowserRouter as Route } from 'react-router-dom';
import './App.css';
import Cart from './componentes/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
