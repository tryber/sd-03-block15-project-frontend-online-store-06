import React from 'react';
import './App.css';
import { Router, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
