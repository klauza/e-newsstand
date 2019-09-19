import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import history from './history';
import './App.css';
import history from './history';

import NotFound from './layout/NotFound';
import Navigation from './layout/Navigation/Navigation';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import About_Wireframes from './components/About_Wireframes';
import About_Author from './components/About_Author';
import Item from './components/Item';
import Search from './components/Search';


function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/item/:item" component={Item} />
        <Route exact path="/shop/search" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/wireframes" component={About_Wireframes} />
        <Route exact path="/about/author" component={About_Author} />

        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
