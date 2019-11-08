import React, { Fragment, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ColorsContext from './context/colorsContext';

// redux
import { Provider } from 'react-redux';
import store from './store';

// pages
import Navigation from './layout/Navigation/Navigation';
import Alert from './layout/Alert';
import NotFound from './layout/NotFound';
//Home
import Home from './components/Home/Home';
//Shop
import ShopCategories from './components/Shop/ShopCategories';
import Search from './components/Shop/Search';
import Item from './components/Item/Item';
import Basket from './components/Basket/Basket';
//Contact
import Contact from './components/Contact/Contact';
//Admin
import Admin from './components/Admin/Admin';
import AdminSettings from './components/Admin/Settings/AdminSettings';
import AdminStock from './components/Admin/Stock/AdminStock';
import AdminUI from './components/Admin/PageLook/AdminUI';


function App() {

  // get context
  const colorContext = React.useContext(ColorsContext);


  // Global Colors
  const [state_main_color, set_state_nain_color] = useState(null);
  const [state_secondary_colors, set_state_secondary_colors] = useState([]);

  React.useEffect(()=>{
    // on APP load, set all colors as are saved in DB
    set_state_nain_color(colorContext.mainGlobalColor);
    set_state_secondary_colors(colorContext.secondaryGlobalColors);
    // eslint-disable-next-line
  }, [])

  const setGlobalColors = (mainColor, secColors) => {
    // save to local app state
    set_state_nain_color(mainColor);
    set_state_secondary_colors(secColors);
    
    // save to DB
    // ...
    // on page refresh, it will fetch from context, so from db
  }


  
  return (
    <Provider store={store}>
      <Router history={history}>
      <Fragment>

        <ColorsContext.Provider 
          value={{ 
            mainColor: state_main_color, 
            secondaryColors: state_secondary_colors, 
            setGlobalColors: setGlobalColors 
          }}>


        <Navigation/>
        <Alert />
        


        <Route render={({ location }) => (


        <TransitionGroup>


          <CSSTransition
            in={true}
            appear={true}
            key={location.key}
            timeout={450}
            classNames="fade" 
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={ShopCategories} />
              <Route exact path="/shop/item/:item" component={Item} />
              <Route exact path="/shop/search" component={Search} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/basket" component={Basket} />

              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/settings" component={AdminSettings} />
              <Route exact path="/admin/stock" component={AdminStock} />
              <Route exact path="/admin/change-ui" component={AdminUI} />

              <Route component={NotFound} />
            </Switch>
          </CSSTransition>

        </TransitionGroup>



        )} />

        </ColorsContext.Provider>
      </Fragment>
      
      </Router>
    </Provider>
  );
}

export default App;
