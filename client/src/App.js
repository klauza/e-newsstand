import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { GlobalStyles } from './global-styles';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';

// redux
import { Provider } from 'react-redux';
import store from './store';

// pages
import NotFound from './layout/NotFound';
import Navigation from './layout/Navigation/Navigation';
import Alert from './layout/Alert';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import AboutWireframes from './components/Contact/AboutWireframes';
import AboutAuthor from './components/Contact/AboutAuthor';
import Item from './components/Item/Item';
import Basket from './components/Basket/Basket';
import Contact from './components/Contact/Contact';
import Search from './components/Shop/Search';



function App() {


  return (
    <Provider store={store}>
      <Router history={history}>
      <Fragment>
        <GlobalStyles />
        <Navigation/>
        <Alert />

        <Route render={({ location }) => (

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade" 
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/shop/item/:item" component={Item} />
              <Route exact path="/shop/search" component={Search} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/contact/author" component={AboutAuthor} />
              <Route exact path="/contact/wireframes" component={AboutWireframes} />
              <Route exact path="/basket" component={Basket} />

              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>



        )} />

        

      </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
