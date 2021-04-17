import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.scss';

// get token setter
import setAuthToken from './utils/setAuthToken';
import Loader from './components/layout/ReusableComponents/Loader'

import { ColorContext } from './context/colorsContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// redux
import { Provider } from 'react-redux';
import store from './store';

// pages
import Navigation from './components/layout/Navigation/Navigation';
import Alert from './components/layout/ReusableComponents/UIAlert';
import NotFound from './components/layout/NotFound';
import NightMode from './components/layout/NightMode';
import UpdatingScreen from './components/layout/ReusableComponents/UpdatingScreen';
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

// get ui-colors
// fetchUIColors();

// get token
if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () => {
  const { colors } = React.useContext(ColorContext);
  // console.log(colors);
  // get context
  // const colorContext = React.useContext(ColorsContext);

  // const contextLoaded = useState(false);

  // Global Colors
  // const [state_main_color, set_state_main_color] = useState(colorContext.mainGlobalColor);
  // const [state_secondary_colors, set_state_secondary_colors] = useState(colorContext.secondaryGlobalColors);

/*
  React.useEffect(()=>{
    // on APP load, set all colors as are saved in DB [done as initial vals]
    set_state_main_color(colorContext.mainGlobalColor);
    set_state_secondary_colors(colorContext.secondaryGlobalColors);

    // eslint-disable-next-line
  }, []);
*/

/*
  const setGlobalColors = (mainColor, secColors) => {
    // save to local app state
    set_state_main_color(mainColor);
    set_state_secondary_colors(secColors);
    
    // save to DB
    // ...
    // on page refresh, it will fetch from context, so from db
  }
*/
  // check
  // console.log(colorContext);

  // console.log('main: ', state_main_color);
  // console.log('secondary cols: ', state_secondary_colors);

  if(colors.secondaryColors && colors.secondaryColors.length > 0){

  return (
    <Provider store={store}>
      <Router history={history}>
      <Fragment>
        
        {/* <ColorContextProvider> */}

        <Navigation/>
        <Alert />
        <UpdatingScreen />
        <NightMode/>

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

        {/* </ColorContextProvider> */}
      </Fragment>
      
      </Router>
    </Provider>
  )    
} else{
  return (<div style={loadingStyle}><Loader/></div>)
};

}
const loadingStyle = {
  "height": "100vh",
  "background": "#fff" ,
  "zIndex": "999",
  "display": "grid",
  "placeItems": "center"
}

export default App;
