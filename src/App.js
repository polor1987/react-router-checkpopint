import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import Admin from './components/Admin'
import Category from './components/Category'
import Products from'./components/Products'


function App() {
return (
<div className="App">
  <Nav />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/admin" component={Admin} />
      <Route path="/products" component={Products} />
    </Switch>
</div>
);
}

export default App;
