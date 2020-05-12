import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from './componentes/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='#' component={Cart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
