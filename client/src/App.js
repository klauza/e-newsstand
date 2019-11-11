import React, { Fragment, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.scss';

// get token setter
import setAuthToken from './utils/setAuthToken';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ColorsContext from './context/colorsContext';

// redux
import { Provider } from 'react-redux';
import store from './store';

// pages
import Navigation from './components/layout/Navigation/Navigation';
import Alert from './components/layout/ReusableComponents/UIAlert';
import NotFound from './components/layout/NotFound';
//Home
import Home from './components/pages/Home/Home';
//Shop
import ShopCategories from './components/pages/Shop/ShopCategories';
import Search from './components/pages/Shop/Search';
import Item from './components/pages/Item/Item';
import Basket from './components/pages/Basket/Basket';
//Contact
import Contact from './components/pages/Contact/Contact';
//Admin
import AdminLogin from './components/pages/Admin/AdminLogin';
import AdminSettings from './components/pages/Admin/Settings/AdminSettings';
import AdminChangelog from './components/pages/Admin/AdminChangelog';
import HomeStock from './components/pages/Admin/Stock/HomeStock';
import HomeChangeUI from './components/pages/Admin/ChangeUI/HomeChangeUI';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {

  // get context
  const colorContext = React.useContext(ColorsContext);


  // Global Colors
  const [state_main_color, set_state_nain_color] = useState(colorContext.mainGlobalColor);
  const [state_secondary_colors, set_state_secondary_colors] = useState(colorContext.secondaryGlobalColors);


  React.useEffect(()=>{
    // on APP load, set all colors as are saved in DB [done as initial vals]
    set_state_nain_color(colorContext.mainGlobalColor);
    set_state_secondary_colors(colorContext.secondaryGlobalColors);

    // eslint-disable-next-line
  }, []);


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

                <Route exact path="/admin" component={AdminLogin} />

                <Route exact path="/admin/settings" component={AdminSettings} />
                <Route exact path="/admin/changelog" component={AdminChangelog} />
                <Route exact path="/admin/stock" component={HomeStock} />
                <Route exact path="/admin/change-ui" component={HomeChangeUI} />

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
