import React, {Fragment, useState} from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';
import { logo } from '../../media/index';
// icons
import SvgHome from '../../Icons/Home';
import SvgShop from '../../Icons/Shop';
import SvgBasket from '../../Icons/Basket';
import SvgContact from '../../Icons/Contact';


const Navlinks = ({mobileToggled, mobileNotToggled, hideMobileNav, isDesktop}) => {

  const [navQuery, setNavQuery] = useState("");

  const submitNavSearch = (e) => {
    e.preventDefault();
    console.log('form submit');
    history.push(`/shop/search?query=${navQuery}`);
  }
  const handleNavInputChange = (e) => {
    setNavQuery(e.target.value.trim());
  }

  return (
      <Fragment>

        <li className="link-logo">
          <div><img src={logo} alt=""/></div> <span>E-newsStand</span>
        </li>

        <li className="link-home">
          <NavLink exact activeClassName="active" to="/" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled ? (<SvgHome />) : (null)}
            {isDesktop || mobileToggled ? (<Fragment><SvgHome /><div className="link-text">Home</div></Fragment>) : (null)}
          </NavLink>
        </li>

        <li className="link-shop">
          <NavLink activeClassName="active" to="/shop" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled ? (<Fragment><SvgShop /><div className="link-text">Shop</div></Fragment>) : (null)}
            {isDesktop || mobileToggled ? (<Fragment><SvgShop /><div className="link-text">Shop</div></Fragment>) : (null)}
          </NavLink>
        </li>

        <li className="link-basket">
          <NavLink exact activeClassName="active" to="/basket" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled ? (<Fragment><SvgBasket /><div className="link-text">Basket</div></Fragment>) : (null)}
            {isDesktop || mobileToggled ? (<Fragment><SvgBasket /><div className="link-text">Basket</div></Fragment>) : (null)}
          </NavLink>
        </li>

        <li className="link-contact">
          <NavLink exact activeClassName="active" to={{pathname: "/contact", hash:"#us"}} className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled ? (<Fragment><SvgContact /><div className="link-text">Contact</div></Fragment>) : (null)}
            {isDesktop || mobileToggled ? (<Fragment><SvgContact /><div className="link-text">Contact</div></Fragment>) : (null)}
          </NavLink>
        </li>

        <li className="link-search">
          <form onSubmit={submitNavSearch}>
            <input type="text" placeholder="search in shop..." onChange={handleNavInputChange} />
            <input type="submit" onTouchEnd={hideMobileNav}/>
          </form>
        </li>

      </Fragment>
  )
}

export default Navlinks
